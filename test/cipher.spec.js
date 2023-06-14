import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
    });


    // Hacker edition
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    // it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
    //   expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    // });

    // Hacker edition
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    // it('should return " !@" for " !@"', () => {
    //   expect(cipher.encode(33, ' !@')).toBe(' !@');
    // });
  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.decode()).toThrow(TypeError);
      expect(() => cipher.decode(0)).toThrow(TypeError);
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      expect(() => cipher.decode(0, 0)).toThrow(TypeError);
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    // Hacker edition
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    // it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
    //   expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
    // });

    // Hacker edition
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    // it('should return " !@" para " !@"', () => {
    //   expect(cipher.decode(33, ' !@')).toBe(' !@');
    // });
  });

});

const assert = require('assert');

describe('cipher', () => {
  describe('encode', () => {
    it('should encode the string with the given offset', () => {
      const offset = 3;
      const string = 'HELLO';
      const expected = 'KHOOR';
      
      const result = cipher.encode(offset, string);
      
      assert.strictEqual(result, expected);
    });

    it('should handle non-alphabetic characters and preserve them', () => {
      const offset = 5;
      const string = 'HELLO, WORLD!';
      const expected = 'MJQQT, BTWQI!';
      
      const result = cipher.encode(offset, string);
      
      assert.strictEqual(result, expected);
    });

    it('should throw a TypeError if the offset is not a number', () => {
      const offset = '3';
      const string = 'HELLO';

      assert.throws(() => {
        cipher.encode(offset, string);
      }, TypeError);
    });

    it('should throw a TypeError if the string is not a string', () => {
      const offset = 3;
      const string = 123;

      assert.throws(() => {
        cipher.encode(offset, string);
      }, TypeError);
    });
  });

  describe('decode', () => {
    it('should decode the string with the given offset', () => {
      const offset = 3;
      const string = 'KHOOR';
      const expected = 'HELLO';
      
      const result = cipher.decode(offset, string);
      
      assert.strictEqual(result, expected);
    });

    it('should handle non-alphabetic characters and preserve them', () => {
      const offset = 5;
      const string = 'MJQQT, BTWQI!';
      const expected = 'HELLO, WORLD!';
      
      const result = cipher.decode(offset, string);
      
      assert.strictEqual(result, expected);
    });

    it('should throw a TypeError if the offset is not a number', () => {
      const offset = '3';
      const string = 'KHOOR';

      assert.throws(() => {
        cipher.decode(offset, string);
      }, TypeError);
    });

    it('should throw a TypeError if the string is not a string', () => {
      const offset = 3;
      const string = 123;

      assert.throws(() => {
        cipher.decode(offset, string);
      }, TypeError);
    });
  });
});

