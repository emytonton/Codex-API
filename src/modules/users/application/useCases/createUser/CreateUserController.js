export class CreateUserController {
  constructor(createUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(request, response) {
    const { name, email, password } = request.body;

    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      });

      
      const userViewModel = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      return response.status(201).json(userViewModel);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}