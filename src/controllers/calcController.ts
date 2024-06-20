import { Request, Response } from 'express';
import { CalcService } from '../services/calcService';

const calcService = new CalcService();

const handleServiceError = (res: Response, error: unknown) => {
  if (error instanceof Error) {
    res.status(400).json({ error: error.message });
  } else {
    res.status(500).json({ error: 'Erro desconhecido.' });
  }
};

const add = async (req: Request, res: Response) => {
  try {
    const { a, b } = req.body;
    const result = await calcService.add(a, b);
    res.json({ result });
  } catch (error) {
    handleServiceError(res, error);
  }
};

const subtract = async (req: Request, res: Response) => {
  try {
    const { a, b } = req.body;
    const result = await calcService.subtract(a, b);
    res.json({ result });
  } catch (error) {
    handleServiceError(res, error);
  }
};

const multiply = async (req: Request, res: Response) => {
  try {
    const { a, b } = req.body;
    const result = await calcService.multiply(a, b);
    res.json({ result });
  } catch (error) {
    handleServiceError(res, error);
  }
};

const divide = async (req: Request, res: Response) => {
  try {
    const { a, b } = req.body;
    const result = await calcService.divide(a, b);
    res.json({ result });
  } catch (error) {
    handleServiceError(res, error);
  }
};

export {
  add,
  subtract,
  multiply,
  divide,
};