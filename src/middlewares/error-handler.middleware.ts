import { Request, Response, NextFunction } from "express";
import logger from "../config/logger";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ip = req.ip || req.connection.remoteAddress;
  const path = req.originalUrl;

  const errorMessage = `[${
    err.status || 500
  }] (${new Date().toISOString()}) - ${ip} - ${path}: ${err.message}`;
  logger.error(errorMessage);
  logger.error(err.stack);

  res.status(500).json({
    message: "An unexpected error occurred",
    // Optionally, you can include more details about the error
    // error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};
