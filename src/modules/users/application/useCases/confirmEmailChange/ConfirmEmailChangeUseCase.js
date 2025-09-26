

export class ConfirmEmailChangeUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ userId, code }) {
    const user = await this.usersRepository.findById(userId);

    
    if (!user) {
      throw new Error('User not found.');
    }

    
    if (!user.pendingEmail || !user.emailChangeCode) {
      throw new Error('No email change request found.');
    }

    
    if (user.emailChangeCode !== code) {
      throw new Error('Invalid verification code.');
    }

    
    if (new Date() > user.emailChangeCodeExpiresAt) {
      throw new Error('Verification code has expired.');
    }

   
    user.email = user.pendingEmail;

    
    user.pendingEmail = null;
    user.emailChangeCode = null;
    user.emailChangeCodeExpiresAt = null;

    const updatedUser = await this.usersRepository.save(user);

    return updatedUser;
  }
}