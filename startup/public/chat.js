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

