import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class LoginUserUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ email, password }) {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new Error('Email or password incorrect.');
    }

    
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Email or password incorrect.');
    }

    
    const token = jwt.sign(
      { id: user.id, name: user.name }, 
      process.env.JWT_SECRET,           
      { expiresIn: '1d' }              
    );

    return token;
  }
}