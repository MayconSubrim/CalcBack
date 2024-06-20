"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcModel = void 0;
class CalcModel {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    isValid() {
        return typeof this.a === 'number' && typeof this.b === 'number';
    }
}
exports.CalcModel = CalcModel;
//# sourceMappingURL=calcModel.js.map