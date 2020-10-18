import { CustomError } from './custom-error';
export class NotAuthorizedError extends CustomError {
  statusCode = 400;
  reason = 'Not Authorized';
  constructor() {
    super('Invalid request parameters.');
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
  serializeErrors() {
    return [{ message: this.reason }];
  }
}
