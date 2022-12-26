const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;
const chatContainer = document.getElementById('chat-container');
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const nicknameForm = document.getElementById('nickname-form');
const nicknameInput = document.getElementById('nickname-input');

// Add an event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the "dark-mode" class on the body element
  body.classList.toggle('dark-mode');
});

// Set the default nickname to "Anonymous"
let nickname = 'Anonymous';

// Update the nickname when the
nicknameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newNickname = nicknameInput.value;
    if (newNickname) {
      nickname = newNickname;
    }
  });
  
  // Send a message when the form is submitted
  chatContainer.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = messageInput.value;
    if (message) {
      // Add the message to the chat, including the nickname
      addMessage(nickname, message);
      // Clear the input field
      messageInput.value = '';
    }
  });

  function addMessage(nickname, message) {
    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    // Add the nickname and message to the message element
    messageElement.innerHTML = `<b>${nickname}:</b> ${message}`;
    // Add the message to the chat
    chatMessages.appendChild(messageElement);
    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  // Update the nickname when the form is submitted
nicknameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newNickname = nicknameInput.value;
    if (newNickname) {
      nickname = newNickname;
      // Display a notification
      showNotification(`Nickname set to "${nickname}"`);
    }
  });
  
  function showNotification(message) {
    // Create a notification element
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;
    // Add the notification to the body of the HTML document
    document.body.appendChild(notification);
    // Remove the notification after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
  function showNotification(message) {
    // Create a notification element
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;
    // Add the notification to the body of the HTML document
    document.body.appendChild(notification);
    // Hide the nickname form
    nicknameForm.style.display = 'none';
    // Remove the notification after 3 seconds
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
  // Keep track of the online users
const onlineUsers = new Set();

// Update the online listings when a user connects or disconnects
socket.on('user connect', (nickname) => {
  onlineUsers.add(nickname);
  updateOnlineListings();
});

socket.on('user disconnect', (nickname) => {
  onlineUsers.delete(nickname);
  updateOnlineListings();
});

function updateOnlineListings() {
  // Clear the current online listings
  onlineUsersElement.innerHTML = '';
  // Add the online users to the online listings
  for (const nickname of onlineUsers) {
    const li = document.createElement('li');
    li.textContent = nickname;
    onlineUsersElement.appendChild(li);
  }
}
