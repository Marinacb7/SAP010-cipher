const cipher = {
  encode(offset, string) {
    if (typeof offset !== 'number') {
      throw new TypeError('O primeiro argumento deve ser um número.');
    }
    if (typeof string !== 'string') {
      throw new TypeError('O segundo argumento deve ser uma string.');
    }
    // Declaração de uma variável chamada "result" inicializada como uma string vazia
    let result = ""; 
    // Loop que percorre cada caractere da string
    for (let i = 0; i < string.length; i++) {
      // Obtém o caractere na posição atual
      const char = string[i].toUpperCase();
      // Verifica se o caractere é uma letra maiúscula usando uma expressão regular
      if (/[A-Z]/.test(char)) {
        // Obtém o código ASCII do caractere
        const charCode = char.charCodeAt(0);
        // Realiza o deslocamento de acordo com o offset fornecido
        const shiftedCharCode = ((charCode - 65 + offset) % 26) + 65;
        // Adiciona o caractere resultante ao resultado final
        result += String.fromCharCode(shiftedCharCode);
      } else {
        // Adiciona o caractere original ao resultado fina
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
      const char = string[i].toUpperCase();
      if (/[A-Z]/.test(char)) {
        const charCode = char.charCodeAt(0);
        // Realiza o deslocamento invertido de acordo com o offset fornecido
        const shiftedCharCode = charCode - 65 - offset;
        // Realiza a decodificação aplicando o deslocamento invertido
        const decodedCharCode = ((shiftedCharCode % 26) + 26) % 26 + 65;
        // Adiciona o caractere decodificado ao resultado final
        result += String.fromCharCode(decodedCharCode);
      } else {
        result += char;
      }
    }
    return result;
  }
};

export default cipher;

