const vigenereCipher = {
  encode(keyword, string) {
    keyword = keyword.toUpperCase();
    string = string.toUpperCase();
    let encodedMessage = '';
    let keywordIndex = 0;

    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (char.match(/[A-Z]/)) {
        const keywordChar = keyword[keywordIndex % keyword.length];
        const shift = keywordChar.charCodeAt(0) - 65;
        const encodedCharCode = ((char.charCodeAt(0) + shift - 65) % 26) + 65;
        encodedMessage += String.fromCharCode(encodedCharCode);
        keywordIndex++;
      } else {
        encodedMessage += char;
      }
    }
    return encodedMessage;
  },

  decode(keyword, string) {
    keyword = keyword.toUpperCase();
    string = string.toUpperCase();
    let decodedMessage = '';
    let keywordIndex = 0;

    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (char.match(/[A-Z]/)) {
        const keywordChar = keyword[keywordIndex % keyword.length];
        const shift = keywordChar.charCodeAt(0) - 65;
        const decodedCharCode = ((char.charCodeAt(0) - shift - 65 + 26) % 26) + 65;
        decodedMessage += String.fromCharCode(decodedCharCode);
        keywordIndex++;
      } else {
        decodedMessage += char;
      }
    }
    return decodedMessage;
  }
};

export default vigenereCipher;
