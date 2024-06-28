import express from 'express'
import 'dotenv/config'; 
import cors from 'cors'
import sequelize from './database/connection.js';
import userRouter from './src/modules/users/users.routes.js';
import postRouter from './src/modules/posts/posts.routes.js';
import commentRouter from './src/modules/comments/comments.routes.js';


const server = express()
const port = process.env.port || 6000
server.use(express.json());
server.use(cors());

 await sequelize.sync({ alter: false})

server.use('/users', userRouter);
server.use('/posts', postRouter);
server.use('/comments', commentRouter);

server.get('/', (req, res) => res.send('Hello World!'))
server.listen(port, () => console.log(`Example server listening on port ${port}!`))