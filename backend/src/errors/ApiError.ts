import { HttpStatus } from '@nestjs/common';

type Error = Record<string, unknown>;

export class ApiError {
  constructor(
    public status: number,
    public message: string,
    public errors: Error[],
  ) {}

  static BadRequest(message: string, errors: Error[] = []) {
    return new ApiError(HttpStatus.BAD_REQUEST, message, errors);
  }
}
