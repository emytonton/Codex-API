

import { PrismaUsersRepository } from '../../../infrastructure/prisma/repositories/PrismaUsersRepository.js';
import { ConfirmEmailChangeUseCase } from './ConfirmEmailChangeUseCase.js';
import { ConfirmEmailChangeController } from './ConfirmEmailChangeController.js';

const prismaUsersRepository = new PrismaUsersRepository();

const confirmEmailChangeUseCase = new ConfirmEmailChangeUseCase(
  prismaUsersRepository
);

const confirmEmailChangeController = new ConfirmEmailChangeController(
  confirmEmailChangeUseCase
);

export { confirmEmailChangeController };