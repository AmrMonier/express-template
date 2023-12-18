// httpExceptionHandler.ts
import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions/http-exceptions.exception"; // Update the path as necessary
import logger from "../config/logger";

export const httpExceptionHandler = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HttpException) {
    const ip = req.ip || req.connection.remoteAddress;
    const path = req.originalUrl;

    const errorMessage = `[${
      err.status || 500
    }] (${new Date().toISOString()}) - ${ip} - ${path}: ${err.message}`;
    logger.error(errorMessage);
    logger.error(err.stack);
    let message = err.message;
    try {
      message = JSON.parse(err.message);
    } catch (error) {}
    return res.status(err.status).send({
      status: err.status,
      message: message,
    });
  }

  next(err);
};
