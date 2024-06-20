const CalcModel = require('../models/calcModel');

const add = (a, b) => {
  const model = new CalcModel(a, b);
  if (!model.isValid()) {
    throw new Error('Os valores de a e b devem ser números válidos.');
  }
  return a + b;
};

const subtract = (a, b) => {
  const model = new CalcModel(a, b);
  if (!model.isValid()) {
    throw new Error('Os valores de a e b devem ser números válidos.');
  }
  return a - b;
};

const multiply = (a, b) => {
  const model = new CalcModel(a, b);
  if (!model.isValid()) {
    throw new Error('Os valores de a e b devem ser números válidos.');
  }
  const result = a * b;
  result.toFixed(2)
  return result;
};

const divide = (a, b) => {
  const model = new CalcModel(a, b);
  if (!model.isValid()) {
    throw new Error('Os valores de a e b devem ser números válidos.');
  }
  if (b === 0) {
    throw new Error('Divisão por zero não é permitida.');
  }
  return a / b;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};