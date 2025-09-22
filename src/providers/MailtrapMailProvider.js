
import nodemailer from 'nodemailer';
import { IMailProvider } from './IMailProvider.js';

export class MailtrapMailProvider extends IMailProvider {
  constructor() {
    super();
    
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true, 
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, 
      },
    });
  }

  async sendMail(to, subject, body) {
    await this.transporter.sendMail({
      from: `Equipe Codex <${process.env.MAIL_USER}>`,
      to: to,
      subject: subject,
      html: body,
    });
  }
}