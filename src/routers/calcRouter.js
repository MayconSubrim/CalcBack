const express = require('express');
const calcController = require('../controllers/calcController');
const { validateNumbers } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/add', validateNumbers, calcController.add);
router.post('/subtract', validateNumbers, calcController.subtract);
router.post('/multiply', validateNumbers, calcController.multiply);
router.post('/divide', validateNumbers, calcController.divide);

module.exports = router;