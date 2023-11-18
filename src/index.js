import caesarCipher from './caesarCipher.js';
/* import vigenereCipher from './vigenereCipher.js';
import substitutionCipher from './substitutionCipher.js'; */

const encodeCaesarButton = document.getElementById('encode-caesar-button');
const decodeCaesarButton = document.getElementById('decode-caesar-button');
/* const encodeVigenereButton = document.getElementById('encode-vigenere-button');
const decodeVigenereButton = document.getElementById('decode-vigenere-button');
const encodeSubstitutionButton = document.getElementById('encode-substitution-button');
const decodeSubstitutionButton = document.getElementById('decode-substitution-button'); */
const clearButton = document.getElementById('clear-button');
const messageInput = document.getElementById('message-input');
const offsetInput = document.getElementById('caesar-offset');
// const keywordInput = document.getElementById('keyword-input');
const resultOutput = document.getElementById('result-output')

encodeCaesarButton.addEventListener('click', () => {
  const offset = parseInt(prompt('Enter the Caesar offset:'));
  const message = messageInput.value.toUpperCase();
  const encodedMessage = caesarCipher.encode(offset, message);
  resultOutput.value = encodedMessage;
});

decodeCaesarButton.addEventListener('click', () => {
  const offset = parseInt(offsetInput.value);
  const message = messageInput.value;
  const decodedMessage = caesarCipher.decode(offset, message);
  resultOutput.value = decodedMessage;
});  

/* decodeCaesarButton.addEventListener('click', () => {
  const offset = parseInt(prompt('Enter the Caesar offset:'));
  const message = messageInput.value.toUpperCase();
  const decodedMessage = caesarCipher.decode(offset, message);
  resultOutput.value = decodedMessage;
}); */

/* encodeVigenereButton.addEventListener('click', () => {
  const keyword = keywordInput.value.toUpperCase();
  const message = messageInput.value.toUpperCase();
  const encodedMessage = vigenereCipher.encode(keyword, message);
  resultOutput.value = encodedMessage;
});

decodeVigenereButton.addEventListener('click', () => {
  const keyword = keywordInput.value.toUpperCase();
  const message = messageInput.value.toUpperCase();
  const decodedMessage = vigenereCipher.decode(keyword, message);
  resultOutput.value = decodedMessage;
});

encodeSubstitutionButton.addEventListener('click', () => {
  const message = messageInput.value.toUpperCase();
  const encodedMessage = substitutionCipher.encode(message);
  resultOutput.value = encodedMessage;
});

decodeSubstitutionButton.addEventListener('click', () => {
  const message = messageInput.value.toUpperCase();
  const decodedMessage = substitutionCipher.decode(message);
  resultOutput.value = decodedMessage;
}); */

clearButton.addEventListener('click', () => {
  messageInput.value = '';
  offsetInput.value = '';
  resultOutput.value = '';
});
// Função para copiar o texto para a área de transferência
function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Result copied to clipboard!');
    })
    .catch((err) => {
      alert('Failed to copy: ', err);
    });
}

// Adicionando evento ao botão de cópia
const copyResultButton = document.getElementById('copy-result-button');
copyResultButton.addEventListener('click', () => {
  const resultText = document.getElementById('result-output').value;
  copyTextToClipboard(resultText);
});

