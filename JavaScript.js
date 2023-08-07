const messageInput = document.getElementById('input-message');
const chatMessages = document.getElementById('chat-messages');

function sendMessage() {
  const message = messageInput.value;
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerText = message;
  chatMessages.appendChild(messageElement);
  messageInput.value = '';
}