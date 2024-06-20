"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNumbers = void 0;
const isNumeric = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
};
const validateNumbers = (req, res, next) => {
    const { a, b } = req.body;
    if (!isNumeric(a) || !isNumeric(b)) {
        res.status(400).json({ error: 'Os valores de a e b devem ser números válidos.' });
        return;
    }
    req.body.a = parseFloat(a);
    req.body.b = parseFloat(b);
    next();
};
exports.validateNumbers = validateNumbers;
//# sourceMappingURL=validationMiddleware.js.map