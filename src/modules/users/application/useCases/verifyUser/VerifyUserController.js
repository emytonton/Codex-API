export class VerifyUserController {
  constructor(verifyUserUseCase) {
    this.verifyUserUseCase = verifyUserUseCase;
  }

  async handle(request, response) {
    const { email, code } = request.body;

    try {
      const user = await this.verifyUserUseCase.execute({ email, code });

      
      const userViewModel = {
        id: user.id,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
      };

      return response.status(200).json(userViewModel);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error during verification.',
      });
    }
  }
}