import express from 'express';
import * as verificationController from '../controllers/verificationController.js';

const router = express.Router();

router.post('/email', verificationController.sendVerificationEmail);

router.post('/email/verify', verificationController.verifyEmail);

export default router;