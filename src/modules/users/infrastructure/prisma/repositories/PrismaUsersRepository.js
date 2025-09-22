import prisma from '../../../../../lib/prisma.js';
import { IUsersRepository } from '../../../domain/repositories/IUsersRepository.js';



export class PrismaUsersRepository extends IUsersRepository {
  async findByEmail(email) {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  }

   async save(user) {
    const userAction = await prisma.user.upsert({
      where: { email: user.email }, 
      update: user,                 
      create: user,                 
    });

    return userAction;
  }

  async findById(id) { 
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  }
}
