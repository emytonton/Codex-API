import { PrismaUsersRepository } from '../../../infrastructure/prisma/repositories/PrismaUsersRepository.js';
import { UpdateProfileDataUseCase } from './UpdateProfileDataUseCase.js';
import { UpdateProfileDataController } from './UpdateProfileDataController.js';

const prismaUsersRepository = new PrismaUsersRepository();
const updateProfileDataUseCase = new UpdateProfileDataUseCase(prismaUsersRepository);
const updateProfileDataController = new UpdateProfileDataController(updateProfileDataUseCase);

export { updateProfileDataController };