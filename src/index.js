import cipher from './cipher.js';

const encodeButton = document.getElementById('encode-button');
const decodeButton = document.getElementById('decode-button');
const clearButton = document.getElementById('clear-button');
const messageInput = document.getElementById('message-input');
const offsetInput = document.getElementById('offset-input');
const resultOutput = document.getElementById('result-output');

encodeButton.addEventListener('click', () => {
  const offset = parseInt(offsetInput.value);
  const message = messageInput.value;
  const encodedMessage = cipher.encode(offset, message);
  resultOutput.value = encodedMessage;
});

decodeButton.addEventListener('click', () => {
  const offset = parseInt(offsetInput.value);
  const message = messageInput.value;
  const decodedMessage = cipher.decode(offset, message);
  resultOutput.value = decodedMessage;
});

clearButton.addEventListener('click', () => {
  messageInput.value = '';
  offsetInput.value = '';
  resultOutput.value = '';
});
