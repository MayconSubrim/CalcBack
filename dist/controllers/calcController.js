"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.subtract = exports.add = void 0;
const calcService_1 = require("../services/calcService");
const calcService = new calcService_1.CalcService();
const handleServiceError = (res, error) => {
    if (error instanceof Error) {
        res.status(400).json({ error: error.message });
    }
    else {
        res.status(500).json({ error: 'Erro desconhecido.' });
    }
};
const add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { a, b } = req.body;
        const result = yield calcService.add(a, b);
        res.json({ result });
    }
    catch (error) {
        handleServiceError(res, error);
    }
});
exports.add = add;
const subtract = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { a, b } = req.body;
        const result = yield calcService.subtract(a, b);
        res.json({ result });
    }
    catch (error) {
        handleServiceError(res, error);
    }
});
exports.subtract = subtract;
const multiply = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { a, b } = req.body;
        const result = yield calcService.multiply(a, b);
        res.json({ result });
    }
    catch (error) {
        handleServiceError(res, error);
    }
});
exports.multiply = multiply;
const divide = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { a, b } = req.body;
        const result = yield calcService.divide(a, b);
        res.json({ result });
    }
    catch (error) {
        handleServiceError(res, error);
    }
});
exports.divide = divide;
//# sourceMappingURL=calcController.js.map