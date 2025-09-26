

export class UpdateProfileDataUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ userId, data }) {
    const { name, description, profilePicture, phoneNumber } = data;

    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new Error('User not found.');
    }

    
    if (name) user.name = name;
    if (description) user.description = description;
    if (profilePicture) user.profilePicture = profilePicture;
    if (phoneNumber) user.phoneNumber = phoneNumber;

    const updatedUser = await this.usersRepository.save(user);
    return updatedUser;
  }
}