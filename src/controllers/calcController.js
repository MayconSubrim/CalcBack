const calcService = require('../services/calcService');
const { validateNumbers } = require('../middlewares/validationMiddleware');

const add = (req, res) => {
  const { a, b } = req.body;
  const result = calcService.add(a, b);
  res.json({ result });
};

const subtract = (req, res) => {
  const { a, b } = req.body;
  const result = calcService.subtract(a, b);
  res.json({ result });
};

const multiply = (req, res) => {
  const { a, b } = req.body;
  const result = calcService.multiply(a, b);
  res.json({ result });
};

const divide = (req, res) => {
  const { a, b } = req.body;
  const result = calcService.divide(a, b);
  if (result.error) {
    res.status(400).json({ error: result.error });
  } else {
    res.json({ result });
  }
};

module.exports = {
  add: [validateNumbers, add],
  subtract: [validateNumbers, subtract],
  multiply: [validateNumbers, multiply],
  divide: [validateNumbers, divide],
};