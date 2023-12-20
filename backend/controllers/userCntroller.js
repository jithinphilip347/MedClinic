import User from '../models/userModel.js';
import bcryptjs from 'bcryptjs';

const registerUser =async (req , res) => {
    const {username , email , password} = req.body
    const hashPassword = bcryptjs.hashSync(password,10)
    const newUser =new User({username, email , password:hashPassword});
    try {
        await newUser.save() 
        res.status(201).json({message:'user create successfully'})
    } catch (error) {
      res.status(500).json(error.message);
    }
    };


export default registerUser