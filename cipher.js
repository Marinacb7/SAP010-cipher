const cipher = {
  encode(offset, string) {
    const ALPHABET_START = 65; // Valor ASCII da letra 'A'
    const ALPHABET_SIZE = 26; // Tamanho do alfabeto

    if (typeof offset !== 'number') {
      throw new TypeError('O primeiro argumento deve ser um número.');
    }
    if (typeof string !== 'string') {
      throw new TypeError('O segundo argumento deve ser uma string.');
    }

    let result = "";
    for (let i = 0; i < string.length; i++) {
      const char = string[i].toUpperCase();
      if (/[A-Z]/.test(char)) {
        const charCode = char.charCodeAt(0);
        const normalizedCharCode = charCode - ALPHABET_START;
        const shiftedCharCode = (normalizedCharCode + offset) % ALPHABET_SIZE;
        const encodedCharCode = (shiftedCharCode + ALPHABET_START);
        result += String.fromCharCode(encodedCharCode);
      } else {
        result += char;
      }
    }
    return result;
  },

  decode(offset, string) {
    const ALPHABET_START = 65; // Valor ASCII da letra 'A'
    const ALPHABET_SIZE = 26; // Tamanho do alfabeto

    if (typeof offset !== 'number') {
      throw new TypeError('O primeiro argumento deve ser um número.');
    }
    if (typeof string !== 'string') {
      throw new TypeError('O segundo argumento deve ser uma string.');
    }

    let result = "";
    for (let i = 0; i < string.length; i++) {
      const char = string[i].toUpperCase();
      if (/[A-Z]/.test(char)) {
        const charCode = char.charCodeAt(0);
        const normalizedCharCode = charCode - ALPHABET_START;
        const shiftedCharCode = (normalizedCharCode - offset);
        const decodedCharCode = ((shiftedCharCode % ALPHABET_SIZE) + ALPHABET_SIZE) % ALPHABET_SIZE + ALPHABET_START;
        result += String.fromCharCode(decodedCharCode);
      } else {
        result += char;
      }
    }
    return result;
  }
};

export default cipher;


