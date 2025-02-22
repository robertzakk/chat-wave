import express from 'express';
import * as verificationController from '../controllers/verificationController.js';

const router = express.Router();

router.post('/email', verificationController.sendVerificationEmail);

export default router;