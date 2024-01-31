type MySaasErrorOptions = { response?: Response };

export class MondayError extends Error {
  response?: Response;

  constructor(message: string, { response }: MySaasErrorOptions = {}) {
    super(message);
    this.response = response;
  }
}
