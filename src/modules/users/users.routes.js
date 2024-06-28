import express from 'express';
import { deleteUser, getAllUsers, getUserPostAndComments, logIn, logout, signup, updateUser } from './users.controlers.js';

const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/login', logIn);
userRouter.put('/:id',updateUser);
userRouter.delete('/:id',deleteUser);
userRouter.post('/logout/:id',logout);
userRouter.get('/', getAllUsers);
userRouter.get('/:userId/:postId', getUserPostAndComments);


export default userRouter;
