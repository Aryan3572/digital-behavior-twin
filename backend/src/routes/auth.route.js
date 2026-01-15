import express from 'express';
const router = express.Router();
import authController from '../controllers/auth.controller.js';

router.post('/register', authController.register);
router.post('/Login', authController.Login);

export default router;