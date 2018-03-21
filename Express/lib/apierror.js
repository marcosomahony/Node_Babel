const httpStatus = require('http-status');

class ExtendableError extends Error {
  constructor(message, status) {
    super(message);
    this.message = message;
    this.status = status;
    Error.captureStackTrace(this, this.constructor.name);
  }
}

class APIError extends ExtendableError {
  constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR) {
    super(message, status);
  }
}

module.exports = APIError;
