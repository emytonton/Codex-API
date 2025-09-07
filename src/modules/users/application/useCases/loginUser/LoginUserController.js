

export class LoginUserController {
  constructor(loginUserUseCase) {
    this.loginUserUseCase = loginUserUseCase;
  }

  async handle(request, response) {
    const { email, password } = request.body;

    try {
      const token = await this.loginUserUseCase.execute({ email, password });
      return response.status(200).json({ token });
    } catch (err) {
      
      return response.status(401).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}