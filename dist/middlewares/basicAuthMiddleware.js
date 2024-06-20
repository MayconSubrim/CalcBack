"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authenticate = (req, res, next) => {
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
    }
    else {
        return res.status(401).json({ error: 'Unauthorized' });
    }
};
exports.default = authenticate;
//# sourceMappingURL=basicAuthMiddleware.js.map