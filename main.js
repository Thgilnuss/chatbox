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
// Send a message or picture when the form is submitted
chatContainer.addEventListener('submit', (event) => {
    event.preventDefault();
    // Check if a picture was selected
    if (pictureInput.files.length > 0) {
      // Send the picture
      sendPicture(pictureInput.files[0]);
    } else {
      // Send a message
      const message = messageInput.value;
      if (message) {
        // Add the message to the chat, including the nickname
        addMessage(nickname, message);
        // Clear the input field
        messageInput.value = '';
      }
    }
  });
  
  function sendPicture(picture) {
    // Add the picture to the chat
    addPicture(nickname, picture);
    // Clear the input field
    pictureInput.value = '';
  }
  function addPicture(nickname, picture) {
    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    // Add the nickname and picture to the message element
    messageElement.innerHTML = `<strong>${nickname}:</strong> <img src="${URL.createObjectURL(picture)}" alt="picture">`;
    // Append the message element to the chat container
    chatContainer.appendChild(messageElement);
    // Scroll to the bottom of the chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  