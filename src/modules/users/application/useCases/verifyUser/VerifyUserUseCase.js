
export class VerifyUserUseCase {
  constructor(usersRepository, mailProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }

  async execute({ email, code }) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('User not found.');
    }
    if (user.isVerified) {
      throw new Error('User is already verified.');
    }
    if (user.verificationCode !== code) {
      throw new Error('Invalid verification code.');
    }
    if (new Date() > user.verificationCodeExpiresAt) {
      throw new Error('Verification code has expired.');
    }

    
    user.isVerified = true;
    user.verificationCode = null;
    user.verificationCodeExpiresAt = null;

    const verifiedUser = await this.usersRepository.save(user);

    
    await this.mailProvider.sendMail(
      email,
      'Bem-vindo(a) ao Codex!',
      `<h1>Olá, ${verifiedUser.name}!</h1><p>Sua conta foi verificada com sucesso. Bem-vindo(a) ao Codex!</p>`
    );

    return verifiedUser;
  }
}