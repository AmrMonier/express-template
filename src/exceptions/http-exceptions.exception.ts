export class HttpException extends Error {
  public status: number;

  constructor(message: string | object, status: number) {
    super(typeof message === "string" ? message : JSON.stringify(message));
    this.status = status;
    Object.setPrototypeOf(this, new.target.prototype); // Restore prototype chain
  }
}

export class BadRequestException extends HttpException {
  constructor(message: string | object) {
    super(message, 400);
  }
}

export class NotFoundException extends HttpException {
  constructor(message: string | object) {
    super(message, 404);
  }
}

export class UnauthorizedException extends HttpException {
  constructor(message: string | object) {
    super(message, 401);
  }
}

export class ForbiddenException extends HttpException {
  constructor(message: string | object) {
    super(message, 403);
  }
}

export class InternalServerException extends HttpException {
  constructor(message: string | object) {
    super(message, 500);
  }
}
