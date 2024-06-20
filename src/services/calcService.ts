import { CalcModel } from '../models/calcModel';

export class CalcService {
  add(a: number, b: number): number {
    const model = new CalcModel(a, b);
    if (!model.isValid()) {
      throw new Error('Os valores de a e b devem ser números válidos.');
    }
    return a + b;
  }

  subtract(a: number, b: number): number {
    const model = new CalcModel(a, b);
    if (!model.isValid()) {
      throw new Error('Os valores de a e b devem ser números válidos.');
    }
    return a - b;
  }

  multiply(a: number, b: number): number {
    const model = new CalcModel(a, b);
    if (!model.isValid()) {
      throw new Error('Os valores de a e b devem ser números válidos.');
    }
    return parseFloat((a * b).toFixed(2));
  }

  divide(a: number, b: number): number {
    const model = new CalcModel(a, b);
    if (!model.isValid()) {
      throw new Error('Os valores de a e b devem ser números válidos.');
    }
    if (b === 0) {
      throw new Error('Divisão por zero não é permitida.');
    }
    return parseFloat((a / b).toFixed(2));
  }
}