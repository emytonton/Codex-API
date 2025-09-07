import { PrismaUsersRepository } from '../../../infrastructure/prisma/repositories/PrismaUsersRepository.js';
import { GetUserProfileUseCase } from './GetUserProfileUseCase.js';
import { GetUserProfileController } from './GetUserProfileController.js';


const prismaUsersRepository = new PrismaUsersRepository();


const getUserProfileUseCase = new GetUserProfileUseCase(prismaUsersRepository);


const getUserProfileController = new GetUserProfileController(
  getUserProfileUseCase
);

export { getUserProfileController };