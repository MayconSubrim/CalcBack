const isNumeric = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };
  
  const validateNumbers = (req, res, next) => {
    const { a, b } = req.body;
  
    if (!isNumeric(a) || !isNumeric(b)) {
      return res.status(400).json({ error: 'Os valores de a e b devem ser números válidos.' });
    }
  
    // Convertendo os valores para float antes de passar adiante
    req.body.a = parseFloat(a);
    req.body.b = parseFloat(b);
  
    next();
  };
  
  module.exports = {
    validateNumbers,
  };