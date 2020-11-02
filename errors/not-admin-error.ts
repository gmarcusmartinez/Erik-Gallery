import { CustomError } from "./custom-error";

export class NotAdminError extends CustomError {
  statusCode = 401;
  reason = "You are unauthorized to make this request";
  constructor() {
    super("");
    Object.setPrototypeOf(this, NotAdminError.prototype);
  }
  serializeErrors() {
    return [{ message: this.reason }];
  }
}
