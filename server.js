import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import personRouter from './routers/person.route.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());


mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB');
}).catch((e) => {
  console.log(e);
});

app.use('/person', personRouter);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

