class CalcModel {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  
    isValid() {
      return typeof this.a === 'number' && typeof this.b === 'number';
    }
  }
  
  module.exports = CalcModel;