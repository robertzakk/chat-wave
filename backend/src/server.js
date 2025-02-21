import express from 'express';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});