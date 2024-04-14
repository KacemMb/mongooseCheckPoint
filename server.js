import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import personRouter from './routers/person.route.js';

dotenv.config(); // to use the .env file

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));// to parse the incoming requests with urlencoded payloads

app.use(express.json());


mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB');
}).catch((e) => {
  console.log(e);
});

app.use('/person', personRouter);// to use the person router


app.get('/', (req, res) => {
  res.send('Hello World');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

