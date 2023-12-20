import express from 'express';
import registerUser from '../controllers/userCntroller.js';

const router = express.Router();

router.get('/', registerUser)


export default router