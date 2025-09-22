
import { PrismaUsersRepository } from '../../../infrastructure/prisma/repositories/PrismaUsersRepository.js';
import { MailtrapMailProvider } from '../../../../../providers/MailtrapMailProvider.js'
import { CreateUserUseCase } from './CreateUserUseCase.js';
import { CreateUserController } from './CreateUserController.js';

const prismaUsersRepository = new PrismaUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider(); 


const createUserUseCase = new CreateUserUseCase(
  prismaUsersRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };