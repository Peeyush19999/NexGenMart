import { Router } from 'express';
import { getAllUsers, getUser, registerUser, loginUser } from './user.controller';
import { loginValidator, signUpValidator } from './validation';

const router = Router();

router.get("/", getAllUsers);

router.get('/:id', getUser);

router.post('/signup', signUpValidator, registerUser);

router.post('/login', loginValidator, loginUser);

export default router;
