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
    const createdUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
    return createdUser;
  }
  async findById(id) { 
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  }
}
