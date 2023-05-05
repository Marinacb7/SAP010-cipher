//Codificar a mensagem
const cipher = {
  encode: function(offset, string) {
    if (typeof offset !== 'number') {
      throw new TypeError('O primeiro argumento deve ser um número.');
    }
    if (typeof string !== 'string') {
      throw new TypeError('O segundo argumento deve ser uma string.');
    }
    let result = "";
    for (let i = 0; i < string.length; i++) {
      const charCode = string.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const shiftedCharCode = ((charCode - 65 + offset) % 26) + 65;
        result += String.fromCharCode(shiftedCharCode);
      } else {
        result += string.charAt(i);
      }
    }
    return result;
  },

// Decodificar a mensagem
  decode: function(offset, string) {
    if (typeof offset !== 'number') {
      throw new TypeError('O primeiro argumento deve ser um número.');
    }
    if (typeof string !== 'string') {
      throw new TypeError('O segundo argumento deve ser uma string.');
    }
    let result = "";
    for (let i = 0; i < string.length; i++) {
      const charCode = string.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const shiftedCharCode = charCode - 65 - offset;
        while (shiftedCharCode < 0) {
          result += 26;
        }
        result = String.fromCharCode ((shiftedCharCode%26)+65);
      } 
    }
    return result;
  }
};

export default cipher;
