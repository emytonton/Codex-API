
import { PrismaUsersRepository } from '../../../infrastructure/prisma/repositories/PrismaUsersRepository.js';
import { CreateUserUseCase } from './CreateUserUseCase.js';
import { CreateUserController } from './CreateUserController.js';

const prismaUsersRepository = new PrismaUsersRepository();

const createUserUseCase = new CreateUserUseCase(prismaUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };