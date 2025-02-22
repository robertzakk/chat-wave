import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.get('/:username', userController.getUser);

router.post('/', userController.createUser);

export default router;