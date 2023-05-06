const cipher = {
  encode(offset, string) {
    if (typeof offset !== 'number') {
      throw new TypeError('O primeiro argumento deve ser um número.');
    }
    if (typeof string !== 'string') {
      throw new TypeError('O segundo argumento deve ser uma string.');
    }
    let result = "";
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (/[A-Z]/.test(char)) {
        const charCode = char.charCodeAt(0);
        const shiftedCharCode = ((charCode - 65 + offset) % 26) + 65;
        result += String.fromCharCode(shiftedCharCode);
      } else {
        result += char;
      }
    }
    return result;
  },

  decode(offset, string) {
    if (typeof offset !== 'number') {
      throw new TypeError('O primeiro argumento deve ser um número.');
    }
    if (typeof string !== 'string') {
      throw new TypeError('O segundo argumento deve ser uma string.');
    }
    let result = "";
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (/[A-Z]/.test(char)) {
        const charCode = char.charCodeAt(0);
        const shiftedCharCode = charCode - 65 - offset;
        const decodedCharCode = ((shiftedCharCode % 26) + 26) % 26 + 65;
        result += String.fromCharCode(decodedCharCode);
      } else {
        result += char;
      }
    }
    return result;
  }
};

export default cipher;

