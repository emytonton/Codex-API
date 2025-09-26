export class RequestEmailChangeUseCase {
  constructor(usersRepository, mailProvider) {
    this.usersRepository = usersRepository;
    this.mailProvider = mailProvider;
  }

  async execute({ userId, newEmail }) {
    const emailAlreadyInUse = await this.usersRepository.findByEmail(newEmail);
    if (emailAlreadyInUse && emailAlreadyInUse.isVerified) {
      throw new Error('This email is already in use by another account.');
    }

    const emailChangeCode = Math.floor(1000 + Math.random() * 9000).toString();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    const userToUpdate = await this.usersRepository.findById(userId);
    userToUpdate.pendingEmail = newEmail;
    userToUpdate.emailChangeCode = emailChangeCode;
    userToUpdate.emailChangeCodeExpiresAt = expiresAt;

    await this.usersRepository.save(userToUpdate);

    await this.mailProvider.sendMail(
      newEmail,
      'Confirme seu novo e-mail - Codex',
      `<h1>Confirmação de Alteração de E-mail</h1><p>Use este código para confirmar seu novo e-mail: <strong>${emailChangeCode}</strong></p>`
    );
  }
}