const chatLog = document.getElementById('chat-log');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

// Placeholder for actual communication with the server
const mockServerSend = (message) => {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = message;
    chatLog.appendChild(msgDiv);
    chatLog.scrollTop = chatLog.scrollHeight; // Auto scroll to bottom
}

sendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        // Send message to server (mocked here)
        mockServerSend(`You: ${message}`);
        chatInput.value = ''; // Clear input field
    }
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});