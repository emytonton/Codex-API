
import { Router } from 'express';

import { authMiddleware } from '../../../../middlewares/authMiddleware.js';
import { createUserController } from '../../application/useCases/createUser/index.js';
import { loginUserController } from '../../application/useCases/loginUser/index.js';
import { getUserProfileController } from '../../application/useCases/getUserProfile/index.js';

const userRoutes = Router();


userRoutes.post('/register', (request, response) => {
  return createUserController.handle(request, response);
});

userRoutes.post('/login', (request, response) => {
  return loginUserController.handle(request, response);
});



userRoutes.get('/profile', authMiddleware, (request, response) => {
  return getUserProfileController.handle(request, response);
});

export { userRoutes };