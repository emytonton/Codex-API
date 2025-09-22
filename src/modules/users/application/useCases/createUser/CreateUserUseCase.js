import bcrypt from 'bcryptjs';

export class CreateUserUseCase {
  constructor(usersRepository, mailProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }

  async execute({ name, email, password }) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userAlreadyExists && userAlreadyExists.isVerified) {
      throw new Error('User already exists.');
    }

    const passwordHash = await bcrypt.hash(password, 8);

    
    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
    
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    
    const user = await this.usersRepository.save({
      name,
      email,
      password: passwordHash,
      isVerified: false,
      verificationCode,
      verificationCodeExpiresAt: expiresAt,
    });

    
    await this.mailProvider.sendMail(
      email,
      'Código de Verificação - Codex',
      `<h1>Seu código de verificação</h1><p>Use este código para confirmar sua conta: <strong>${verificationCode}</strong></p>`
    );

    return user;
  }
}