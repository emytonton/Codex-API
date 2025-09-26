import { PrismaUsersRepository } from '../../../infrastructure/prisma/repositories/PrismaUsersRepository.js';
import { MailtrapMailProvider } from '../../../infrastructure/providers/MailtrapMailProvider.js';
import { RequestEmailChangeUseCase } from './RequestEmailChangeUseCase.js';
import { RequestEmailChangeController } from './RequestEmailChangeController.js';

const prismaUsersRepository = new PrismaUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const requestEmailChangeUseCase = new RequestEmailChangeUseCase(
  prismaUsersRepository,
  mailtrapMailProvider
);

const requestEmailChangeController = new RequestEmailChangeController(
  requestEmailChangeUseCase
);

export { requestEmailChangeController };