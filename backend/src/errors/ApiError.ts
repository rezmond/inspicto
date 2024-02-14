type Error = Record<string, unknown>;

export class ApiError {
  constructor(
    public status: number,
    public message: string,
    public errors: Error[],
  ) {}

  static BadRequest(message: string, errors: Error[] = []) {
    return new ApiError(400, message, errors);
  }
}
