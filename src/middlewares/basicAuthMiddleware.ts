import { Request, Response, NextFunction } from 'express';

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  const validUsername = 'admin';
  const validPassword = 'password123';

  if (username === validUsername && password === validPassword) {
    return next();
  } else {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

export default authenticate;