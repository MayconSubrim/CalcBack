import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import calcRouter from './routers/calcRouter';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/calc', calcRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});