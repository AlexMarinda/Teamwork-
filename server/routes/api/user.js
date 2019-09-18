import express from 'express';
import UserController from '../../controllers/user';
import {Validation} from '../../middleware/validation';




const router = express.Router();

router.post('/signup', Validation.userValidator,UserController.registerUser);

router.post('/signin', UserController.login);

export default router;