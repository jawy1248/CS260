let chatSocket;

function chat(){
    let usernameText = localStorage.getItem('userName');
    const chatID = document.getElementById("chat");
    chatID.innerHTML = "Hello " + usernameText + ", how can I help you?";

    const chatBackID = document.getElementById("chatBack");
    chatBackID.innerHTML = '<input id="replyInput"></input> <button onclick="reply()">Reply</button>';
    chatSocket = new Socket();
}

function reply(){
    let usernameText = localStorage.getItem('userName');
    let replyInput = document.getElementById("replyInput");
    chatSocket.broadcastEvent(usernameText, replyInput?.value);
}

class Socket {
    socket;

    constructor(){
        this.configureWebSocket();
    }

    configureWebSocket() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        this.socket.onopen = (event) => {
            this.displayMsg('chat', 'connected');
        };
        this.socket.onclose = (event) => {
            this.displayMsg('chat', 'disconnected');
        };
        this.socket.onmessage = async (event) => {
            const msg = JSON.parse(await event.data.text());
            this.displayMsg(msg.from, msg.chat);
        };
    }

    broadcastEvent(fromIN, chatIN) {
        const event = {
            from: fromIN,
            chat: chatIN,
        };
        const chatText = document.getElementById("reply");
        chatText.innerHTML += '\n' + fromIN + ': <pre>' + chatIN + '</pre>';

        this.socket.send(JSON.stringify(event));
    }

    displayMsg(from, msg) {
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
            chatText.innerHTML += '\n' + from + ': <pre>' + msg + '</pre>';
        }
    }
}
