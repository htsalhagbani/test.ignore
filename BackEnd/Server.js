import express from "express";
import dotenv from 'dotenv';
import { connectDB } from './Database/database.js';
import userRoutes from './Routes/userRoutes.js';
import articleRoutes from './Routes/articleRoutes.js';

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use('/user', userRoutes);
app.use('/article', articleRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
