import caesarCipher from '../src/caesarCipher';
import vigenereCipher from '../src/vigenereCipher';
import substitutionCipher from '../src/substitutionCipher';

describe('Caesar Cipher', () => {
  describe('encode', () => {
    it('should encode the string with the given offset', () => {
      const offset = 3;
      const message = 'HELLO';
      const expected = 'KHOOR';
      const result = caesarCipher.encode(offset, message);
      expect(result).toBe(expected);
    });

    it('should handle non-alphabetic characters and preserve them', () => {
      const offset = 5;
      const message = 'HELLO, WORLD!';
      const expected = 'MJQQT, BTWQI!';
      const result = caesarCipher.encode(offset, message);
      expect(result).toBe(expected);
    });

    it('should throw a TypeError if the offset is not a number', () => {
      const offset = '3';
      const message = 'HELLO';
      expect(() => caesarCipher.encode(offset, message)).toThrow(TypeError);
    });

    it('should throw a TypeError if the string is not a string', () => {
      const offset = 3;
      const message = 123;
      expect(() => caesarCipher.encode(offset, message)).toThrow(TypeError);
    });
  });

  describe('decode', () => {
    it('should decode the string with the given offset', () => {
      const offset = 3;
      const message = 'KHOOR';
      const expected = 'HELLO';
      const result = caesarCipher.decode(offset, message);
      expect(result).toBe(expected);
    });

    it('should handle non-alphabetic characters and preserve them', () => {
      const offset = 5;
      const message = 'MJQQT, BTWQI!';
      const expected = 'HELLO, WORLD!';
      const result = caesarCipher.decode(offset, message);
      expect(result).toBe(expected);
    });

    it('should throw a TypeError if the offset is not a number', () => {
      const offset = '3';
      const message = 'KHOOR';
      expect(() => caesarCipher.decode(offset, message)).toThrow(TypeError);
    });

    it('should throw a TypeError if the string is not a string', () => {
      const offset = 3;
      const message = 123;
      expect(() => caesarCipher.decode(offset, message)).toThrow(TypeError);
    });
  });
});

describe('Vigenere Cipher', () => {
  describe('encode', () => {
    it('should encode the string with the given keyword', () => {
      const keyword = 'KEY';
      const message = 'HELLO';
      const expected = 'RIJVS';
      const result = vigenereCipher.encode(keyword, message);
      expect(result).toBe(expected);
    });

    it('should handle non-alphabetic characters and preserve them', () => {
      const keyword = 'KEY';
      const message = 'HELLO, WORLD!';
      const expected = 'RIJVS, UYVJN!';
      const result = vigenereCipher.encode(keyword, message);
      expect(result).toBe(expected);
    });

    it('should throw a TypeError if the keyword is not a string', () => {
      const keyword = 123;
      const message = 'HELLO';
      expect(() => vigenereCipher.encode(keyword, message)).toThrow(TypeError);
    });

    it('should throw a TypeError if the string is not a string', () => {
      const keyword = 'KEY';
      const message = 123;
      expect(() => vigenereCipher.encode(keyword, message)).toThrow(TypeError);
    });
  });

  describe('decode', () => {
    it('should decode the string with the given keyword', () => {
      const keyword = 'KEY';
      const message = 'RIJVS';
      const expected = 'HELLO';
      const result = vigenereCipher.decode(keyword, message);
      expect(result).toBe(expected);
    });

    it('should handle non-alphabetic characters and preserve them', () => {
      const keyword = 'KEY';
      const message = 'RIJVS, UYVJN!';
      const expected = 'HELLO, WORLD!';
      const result = vigenereCipher.decode(keyword, message);
      expect(result).toBe(expected);
    });

    it('should throw a TypeError if the keyword is not a string', () => {
      const keyword = 123;
      const message = 'RIJVS';
      expect(() => vigenereCipher.decode(keyword, message)).toThrow(TypeError);
    });

    it('should throw a TypeError if the string is not a string', () => {
      const keyword = 'KEY';
      const message = 123;
      expect(() => vigenereCipher.decode(keyword, message)).toThrow(TypeError);
    });
  });
});

describe('Substitution Cipher', () => {
  describe('generateSubstitutionTable', () => {
    it('should generate a valid substitution table based on the key', () => {
      const key = 'KEYWORD';
      const expectedTable = {
        "A": "K",
        "B": "E",
        "C": "Y",
        "D": "W",
        "E": "O",
        "F": "R",
        "G": "D",
        "H": "A",
        "I": "B",
        "J": "C",
        "K": "F",
        "L": "G",
        "M": "H",
        "N": "I",
        "O": "J",
        "P": "L",
        "Q": "M",
        "R": "N",
        "S": "P",
        "T": "Q",
        "U": "S",
        "V": "T",
        "W": "U",
        "X": "V",
        "Y": "X",
        "Z": "Z",
      };
      const result = substitutionCipher.generateSubstitutionTable(key);
      expect(result).toEqual(expectedTable);
    });
  });

  describe('encode', () => {
    it('should encode the string with the given key', () => {
      const key = 'KEYWORD';
      const message = 'HELLO';
      const expected = 'AOGGJ';
      const result = substitutionCipher.encode(message, key);
      expect(result).toBe(expected);
    });

    it('should handle non-alphabetic characters and preserve them', () => {
      const key = 'KEYWORD';
      const message = 'HELLO, WORLD!';
      const expected = 'AOGGJ, UJNGW!';
      const result = substitutionCipher.encode(message, key);
      expect(result).toBe(expected);
    });
  });

  describe('decode', () => {
    it('should decode a simple encoded message', () => {
      const message = 'AOGGJ, UJNGW!';
      const key = 'KEYWORD';
      const decodedMessage = substitutionCipher.decode(message, key);
      expect(decodedMessage).toBe('HELLO, WORLD!');
    });

    it('should handle decoding non-alphabetic characters', () => {
      const message = 'AOGGJ! 123';
      const key = 'KEYWORD';
      const decodedMessage = substitutionCipher.decode(message, key);
      expect(decodedMessage).toBe('HELLO! 123');
    });

    it('should correctly decode a complex encoded message', () => {
      const message = 'PSEPQBQSQBJI';
      const key = 'KEYWORD';
      const decodedMessage = substitutionCipher.decode(message, key);
      expect(decodedMessage).toBe('SUBSTITUTION');
    });
  });
});
