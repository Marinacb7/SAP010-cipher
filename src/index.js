import cipher from './cipher.js';
const messageInput = document.getElementById('message-input');
const offsetInput = document.getElementById('offset-input');
const encodeButton = document.getElementById('encode-button');
const decodeButton = document.getElementById('decode-button');
const resultOutput = document.getElementById('result-output');

encodeButton.addEventListener('click', function() {
  const message = messageInput.value;
  const offset = parseInt(offsetInput.value);
  const encodedMessage = cipher.encode(offset, message);
  resultOutput.value = encodedMessage;
});

decodeButton.addEventListener('click', function() {
  const message = messageInput.value;
  const offset = parseInt(offsetInput.value);
  const decodedMessage = cipher.decode(offset, message);
  resultOutput.value = decodedMessage;
});
   
console.log(cipher);
