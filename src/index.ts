import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import calcRouter from './routers/calcRouter';

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:4200', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}));
app.use(bodyParser.json());
app.use('/calc', calcRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});