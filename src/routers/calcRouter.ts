import express from 'express';
import * as calcController from '../controllers/calcController';
import { validateNumbers } from '../middlewares/validationMiddleware';
import authenticate from '../middlewares/basicAuthMiddleware';

const router = express.Router();

router.post('/add', authenticate, validateNumbers, calcController.add);
router.post('/subtract', authenticate, validateNumbers, calcController.subtract);
router.post('/multiply', authenticate, validateNumbers, calcController.multiply);
router.post('/divide', authenticate, validateNumbers, calcController.divide);

export default router;