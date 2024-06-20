"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcService = void 0;
const calcModel_1 = require("../models/calcModel");
class CalcService {
    add(a, b) {
        const model = new calcModel_1.CalcModel(a, b);
        if (!model.isValid()) {
            throw new Error('Os valores de a e b devem ser números válidos.');
        }
        return a + b;
    }
    subtract(a, b) {
        const model = new calcModel_1.CalcModel(a, b);
        if (!model.isValid()) {
            throw new Error('Os valores de a e b devem ser números válidos.');
        }
        return a - b;
    }
    multiply(a, b) {
        const model = new calcModel_1.CalcModel(a, b);
        if (!model.isValid()) {
            throw new Error('Os valores de a e b devem ser números válidos.');
        }
        return parseFloat((a * b).toFixed(2));
    }
    divide(a, b) {
        const model = new calcModel_1.CalcModel(a, b);
        if (!model.isValid()) {
            throw new Error('Os valores de a e b devem ser números válidos.');
        }
        if (b === 0) {
            throw new Error('Divisão por zero não é permitida.');
        }
        return parseFloat((a / b).toFixed(2));
    }
}
exports.CalcService = CalcService;
//# sourceMappingURL=calcService.js.map