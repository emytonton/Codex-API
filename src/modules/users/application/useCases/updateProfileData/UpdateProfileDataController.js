export class UpdateProfileDataController {
  constructor(updateProfileDataUseCase) {
    this.updateProfileDataUseCase = updateProfileDataUseCase;
  }

  async handle(request, response) {
    const { userId } = request;
    const data = request.body;

    try {
      const user = await this.updateProfileDataUseCase.execute({ userId, data });

      const userViewModel = {
        id: user.id,
        name: user.name,
        email: user.email,
        description: user.description,
      };

      return response.status(200).json(userViewModel);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}