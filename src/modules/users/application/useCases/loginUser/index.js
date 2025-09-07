import { PrismaUsersRepository } from '../../../infrastructure/prisma/repositories/PrismaUsersRepository.js';
import { LoginUserUseCase } from './LoginUserUseCase.js';
import { LoginUserController } from './LoginUserController.js';

const prismaUsersRepository = new PrismaUsersRepository();
const loginUserUseCase = new LoginUserUseCase(prismaUsersRepository);
const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserController };