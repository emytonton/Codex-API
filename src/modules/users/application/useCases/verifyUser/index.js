import { PrismaUsersRepository } from '../../../infrastructure/prisma/repositories/PrismaUsersRepository.js';
import { MailtrapMailProvider } from '../../../infrastructure/providers/MailtrapMailProvider.js'
import { VerifyUserUseCase } from './VerifyUserUseCase.js';
import { VerifyUserController } from './VerifyUserController.js';


const prismaUsersRepository = new PrismaUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();


const verifyUserUseCase = new VerifyUserUseCase(
  prismaUsersRepository,
  mailtrapMailProvider
);


const verifyUserController = new VerifyUserController(verifyUserUseCase);

export { verifyUserController };