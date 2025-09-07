import bcrypt from 'bcryptjs';

export class CreateUserUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ name, email, password }) {
    
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists.'); 
    }

   
    const passwordHash = await bcrypt.hash(password, 8);
    
    const user = await this.usersRepository.save({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}