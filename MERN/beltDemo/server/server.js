import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/post.routes.js';
import cors from 'cors'

const app = express();

app.use(express.json(),cors());
app.use('/api',router)
dotenv.config();

const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`)
);