// src/modules/users/application/useCases/getUserProfile/GetUserProfileController.js

export class GetUserProfileController {
  constructor(getUserProfileUseCase) {
    this.getUserProfileUseCase = getUserProfileUseCase;
  }

  async handle(request, response) {
    
    const { userId } = request;

    try {
      const user = await this.getUserProfileUseCase.execute({ userId });

      
      const userViewModel = {
        id: user.id,
        name: user.name,
        email: user.email,
        description: user.description,
        profilePicture: user.profilePicture,
        createdAt: user.createdAt,
      };

      return response.status(200).json(userViewModel);
    } catch (err) {
      
      return response.status(404).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}