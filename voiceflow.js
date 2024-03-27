window.addEventListener('load', function() {
  const chatBody = document.getElementById('chat-body');
  const chatInput = document.getElementById('chat-input');

  const config = {
    verify: { projectID: '655bdd29292a21c07e66389a' },
    url: 'https://general-runtime.voiceflow.com',
    versionID: 'production'
  };

  window.voiceflow.Widget.init(config, function(widget) {
    widget.on('ask', function(message) {
      const chatMessage = document.createElement('div');
      chatMessage.innerHTML = message.string;
      chatBody.appendChild(chatMessage);
    });

    chatInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        const userInput = chatInput.value;
        chatInput.value = '';

        const userMessage = document.createElement('div');
        userMessage.innerHTML = userInput;
        chatBody.appendChild(userMessage);

        widget.send({
          type: 'text',
          payload: userInput
        });
      }
    });
  });
});
