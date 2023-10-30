function login() {
    const username = document.getElementById("username");
    localStorage.setItem('username', username.value);
    window.location.href = "user.html"
}

function reload() {
    let usernameText = localStorage.getItem('username');
    const reloadID = document.getElementById("reloadButt")
    reloadID.innerHTML = "Welcome <lead><b>" + usernameText + "</b></lead>, here are your saved searches";
}