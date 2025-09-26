
import { Router } from 'express';
import { authMiddleware } from '../../../../middlewares/authMiddleware.js';


import { createUserController } from '../../application/useCases/createUser/index.js';
import { verifyUserController } from '../../application/useCases/verifyUser/index.js';
import { loginUserController } from '../../application/useCases/loginUser/index.js';
import { getUserProfileController } from '../../application/useCases/getUserProfile/index.js';
import { updateProfileDataController } from '../../application/useCases/updateProfileData/index.js';
import { requestEmailChangeController } from '../../application/useCases/requestEmailChange/index.js';
import { confirmEmailChangeController } from '../../application/useCases/confirmEmailChange/index.js';

const userRoutes = Router();


userRoutes.post('/register', (req, res) => createUserController.handle(req, res));


userRoutes.post('/verify', (req, res) => verifyUserController.handle(req, res));


userRoutes.post('/login', (req, res) => loginUserController.handle(req, res));



userRoutes.get('/profile', authMiddleware, (req, res) => getUserProfileController.handle(req, res));


userRoutes.patch('/profile', authMiddleware, (req, res) => updateProfileDataController.handle(req, res));


userRoutes.post('/profile/request-email-change', authMiddleware, (req, res) => requestEmailChangeController.handle(req, res));


userRoutes.post('/profile/confirm-email-change', authMiddleware, (req, res) => confirmEmailChangeController.handle(req, res));


export { userRoutes };