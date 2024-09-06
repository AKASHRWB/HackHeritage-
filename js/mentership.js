document.addEventListener('DOMContentLoaded', function() {
    const startChatButton = document.getElementById('start-chat');
    const closeChatButton = document.getElementById('close-chat');
    const chatBox = document.getElementById('chat-box');
    const closeChatBoxButton = document.getElementById('close-chat-box');

    startChatButton.addEventListener('click', function() {
        startChatButton.classList.add('hidden');
        closeChatButton.classList.remove('hidden');
        chatBox.classList.remove('hidden');
    });

    closeChatButton.addEventListener('click', function() {
        startChatButton.classList.remove('hidden');
        closeChatButton.classList.add('hidden');
        chatBox.classList.add('hidden');
    });

    closeChatBoxButton.addEventListener('click', function() {
        startChatButton.classList.remove('hidden');
        closeChatButton.classList.add('hidden');
        chatBox.classList.add('hidden');
    });
});
