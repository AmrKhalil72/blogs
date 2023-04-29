import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import blogRouter from './src/modules/blog/blog.router.js';
import { userRouter } from './src/modules/user/user.router.js';
import {config} from 'dotenv';

config()
const app = express();
app.use(express.json());
app.listen(process.env.PORT,()=>{
  console.log('Server is Running');
});
app.get('/',(req,res)=>{
  res.send('Hello World')
});

dbConnection();
app.use('/users', userRouter);
app.use('/blogs', blogRouter)

process.on('uncaughtException',(err)=>{
  console.log('syntax Error',err)
})
process.on('unhandledRejection',(err)=>{
  console.log('outside Express Error',err)
})