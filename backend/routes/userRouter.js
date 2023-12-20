import express from 'express';
import registerUser from '../controllers/userCntroller.js';

const router = express.Router();

router.get('/signup', registerUser)


export default router