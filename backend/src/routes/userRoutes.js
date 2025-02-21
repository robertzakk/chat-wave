import express from 'express';

import * as userController from '../controllers/userController.js';

const router = express.Router();

router.get('/user/:id', userController.getUser);

export default router;