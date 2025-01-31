const substitutionCipher = {
  generateSubstitutionTable(key) {
    key = key.toUpperCase();
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const keySet = {};
    key.split('').forEach(char => {
      keySet[char] = true;
    });
  
    // eslint-disable-next-line no-prototype-builtins
    const remainingChars = alphabet.split('').filter(char => !keySet.hasOwnProperty(char));
    const shuffledChars = key + remainingChars.join('');
  
    const substitutionTable = {};
    for (let i = 0; i < alphabet.length; i++) {
      substitutionTable[alphabet[i]] = shuffledChars[i];
    }
  
    return substitutionTable;
  },
  
  encode(string, key) {
    const substitutionTable = this.generateSubstitutionTable(key);
    string = string.toUpperCase();
    let encodedMessage = '';
  
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (char.match(/[A-Z]/)) {
        const substitutedChar = substitutionTable[char] || char;
        encodedMessage += substitutedChar;
      } else {
        encodedMessage += char;
      }
    }
    return encodedMessage;
  },
  
  decode(string, key) {
    const substitutionTable = this.generateSubstitutionTable(key);
    const reversedTable = {};
    
    for (const char in substitutionTable) {
      // eslint-disable-next-line no-prototype-builtins
      if (substitutionTable.hasOwnProperty(char)) {
        reversedTable[substitutionTable[char]] = char; // Inverte as chaves e os valores
      }
    }
  
    string = string.toUpperCase();
    let decodedMessage = '';
  
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (char.match(/[A-Z]/)) {
        const substitutedChar = reversedTable[char] || char;
        decodedMessage += substitutedChar;
      } else {
        decodedMessage += char;
      }
    }
    return decodedMessage;
  }  
};
  
export default substitutionCipher;
  
  