import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connnectToMongoDB from './db/connectToMongoDB.js';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

dotenv.config();
const PORT = parseInt(process.env.PORT || 3000);

app.use(express.json()); // to parse the incoming requests with JSON payloads (From req.body)
app.use(cookieParser());  // to read cookies from req body

app.get('/', (req, res) => {
  res.send("hello Rustam Kumar ji :)");
}); 

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);


app.listen(PORT, () => {
  connnectToMongoDB();
  console.log(`Listening on http://localhost:${PORT}`);
})