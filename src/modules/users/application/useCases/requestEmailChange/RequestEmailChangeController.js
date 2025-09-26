export class RequestEmailChangeController {
  constructor(requestEmailChangeUseCase) {
    this.requestEmailChangeUseCase = requestEmailChangeUseCase;
  }

  async handle(request, response) {
    const { userId } = request;
    const { newEmail } = request.body;

    if (!newEmail) {
      return response.status(400).json({
        message: 'New email address is required.',
      });
    }

    try {
      await this.requestEmailChangeUseCase.execute({ userId, newEmail });

      return response.status(200).json({
        message: `Verification code sent to ${newEmail}. Please check your inbox.`,
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error while requesting email change.',
      });
    }
  }
}