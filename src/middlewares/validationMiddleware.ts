import { Request, Response, NextFunction } from 'express';

const isNumeric = (value: any): boolean => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

export const validateNumbers = (req: Request, res: Response, next: NextFunction): void => {
  const { a, b } = req.body;

  if (!isNumeric(a) || !isNumeric(b)) {
    res.status(400).json({ error: 'Os valores de a e b devem ser números válidos.' });
    return;
  }

  req.body.a = parseFloat(a);
  req.body.b = parseFloat(b);

  next();
};