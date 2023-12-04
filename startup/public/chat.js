function chat(){
    let usernameText = localStorage.getItem('username');
    const chatID = document.getElementById("chat");
    chatID.innerHTML = "Hello " + usernameText + ", how can I help you?";

    const chatBackID = document.getElementById("chatBack");
    chatBackID.innerHTML = '<input id="replyInput"></input> <button onclick="reply()">Reply</button>';
}

function reply(){
    const replyID = document.getElementById("reply");
    const replyInput = document.getElementById("replyInput");
    replyID.innerHTML += '\n' + usernameText + ': <pre>' + replyInput.value + '</pre>';
    replyID.innerHTML += '\nBot: <pre>This is my reply</pre>';
}


function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
        this.displayMsg('system', 'chat', 'connected');
    };
    this.socket.onclose = (event) => {
        this.displayMsg('system', 'chat', 'disconnected');
    };
    this.socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());

        if (msg.type === GameEndEvent) {
        this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
        } else if (msg.type === GameStartEvent) {
        this.displayMsg('player', msg.from, `started a new game`);
        }
    };
}

function broadcastEvent(from, type, value) {
    const event = {
        from: from,
        type: type,
        value: value,
    };
    this.socket.send(JSON.stringify(event));
}

function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
        `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
}