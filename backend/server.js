import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRouter.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('connected to mongoDB');
})
.catch((err) =>{
    console.log(err);
})

const app = express();

app.listen(3000 , () => {
    console.log("Server start port 3000");
});

app.use("/api/user",userRoutes);