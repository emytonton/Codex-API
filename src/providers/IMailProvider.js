
export class IMailProvider {
  async sendMail(to, subject, body) {
    throw new Error("Method 'sendMail' must be implemented.");
  }
}