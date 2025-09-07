

export class GetUserProfileUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ userId }) {
    
    const user = await this.usersRepository.findById(userId);

    
    if (!user) {
      throw new Error('User not found.');
    }

   
    return user;
  }
}