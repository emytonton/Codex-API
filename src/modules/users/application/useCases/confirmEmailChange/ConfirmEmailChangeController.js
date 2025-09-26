export class ConfirmEmailChangeController {
  constructor(confirmEmailChangeUseCase) {
    this.confirmEmailChangeUseCase = confirmEmailChangeUseCase;
  }

  async handle(request, response) {
    const { userId } = request; 
    const { code } = request.body;

    if (!code) {
      return response.status(400).json({ message: 'Verification code is required.' });
    }

    try {
      const user = await this.confirmEmailChangeUseCase.execute({ userId, code });

      const userViewModel = {
        id: user.id,
        name: user.name,
        email: user.email, 
      };

      return response.status(200).json(userViewModel);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error while confirming email change.',
      });
    }
  }
}