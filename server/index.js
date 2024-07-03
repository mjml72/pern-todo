import express from 'express';
import { todoRouter } from './routes/todoRouter.js';
import cors from 'cors';

const app = express();
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000'
}
app.use(cors(corsOptions));

app.use('/todos', todoRouter);

const port = 4000;
app.listen(port, () => {
    console.log(`server listen on port ${port}`);
});