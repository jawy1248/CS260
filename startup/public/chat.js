function chat(){
    let usernameText = localStorage.getItem('userName');
    const chatID = document.getElementById("chat");
    chatID.innerHTML = "Hello " + usernameText + ", how can I help you?";

    const chatBackID = document.getElementById("chatBack");
    chatBackID.innerHTML = '<input id="replyInput"></input> <button onclick="reply()">Reply</button>';
    configureWebSocket();
}

function reply(){
    let usernameText = localStorage.getItem('userName');
    const replyID = document.getElementById("reply");
    const replyInput = document.getElementById("replyInput");
    replyID.innerHTML += '\n' + usernameText + ': <pre>' + replyInput.value + '</pre>';
    replyID.innerHTML += '\n' + usernameText + ': <pre>This is my reply</pre>';
}


function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    let socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
        displayMsg('chat', 'connected');
    };
    socket.onclose = (event) => {
        this.displayMsg('chat', 'disconnected');
    };
    socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());

        // if (msg.type === GameEndEvent) {
        //     displayMsg('player', msg.from, `scored ${msg.value.score}`);
        // } else if (msg.type === GameStartEvent) {
        //     displayMsg('player', msg.from, `started a new game`);
        // }
    };
}

function broadcastEvent(from, chat) {
    const event = {
        from: from,
        chat: type,
    };
    this.socket.send(JSON.stringify(event));
}

function displayMsg(from, msg) {
    const chatText = document.getElementById("reply");
    if(from === 'chat'){
        if(msg === 'connected'){
            chatText.innerHTML += 'Starting a new conversation...';
            chatText.innerHTML += '\n';
        }
        else{
            chatText.innerHTML += 'Ending the conversation...thank you!';
        }
    }
    else{
        replyID.innerHTML += '\n' + from + ': <pre>' + msg + '</pre>';
    }
}
