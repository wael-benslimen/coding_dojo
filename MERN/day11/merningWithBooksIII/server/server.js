import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/book.routs.js';
import cors from 'cors'

const app = express();

app.use(express.json(),cors());
app.use(router)
dotenv.config();

const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`)
);