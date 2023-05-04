const cipher = {
  encode: function(offset, string) {
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

  decode: function(offset, string) {
    return this.encode((26 - offset) % 26, string);
  }
};

export default cipher;
