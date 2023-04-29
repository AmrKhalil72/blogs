import express from 'express';
import { signIn, signUp } from './user.controller.js';

export const userRouter = express.Router();

userRouter.post('/signUp', signUp);
userRouter.post('/signIn', signIn);