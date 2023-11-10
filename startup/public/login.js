function login() {
    const username = document.getElementById("username");
    localStorage.setItem('username', username.value);
    window.location.href = "user.html"
}