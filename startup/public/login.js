(async () => {
  const userName = localStorage.getItem("userName");
  if (userName) {
    displayLogout(userName);
  } else {
    displayLogin();
  }
})();

function displayLogin() {
  let reloadID = document.getElementById("LoginBox");
  let newHTML = `
        <div class="border border-2 border-dark rounded-5 p-3 text-bg-danger bg-gradient">
            <h4>Login or Create an Account</h4>
            <div class="input-group flex-nowrap m-2">
                <span class="input-group-text">Username</span>
                <input type="text" class="form-control me-4" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" id="userName">
            </div>
            <div class="input-group flex-nowrap m-2">
                <span class="input-group-text" id="password">Password</span>
                <input type="password" class="form-control me-4" placeholder="Password" aria-label="Password" aria-describedby="addon-wrapping" id="userPassword">
            </div>
            <button type="button" class="btn btn-light" onclick="loginUser()">Login</button>
            <button type="button" class="btn btn-light" onclick="createUser()">Create</button>
        </div>
    `;
  reloadID.innerHTML = newHTML;
}

function displayLogout(userName) {
  let reloadID = document.getElementById("LoginBox");
  let newHTML = `
        <div class="border border-2 border-dark rounded-5 p-3 text-bg-danger bg-gradient">
            <h4>Welcome <em><b>${userName}</b></em></h4>
            <div class="input-group flex-nowrap m-2">
                <span>Click below to view saved searches or logout</span>
            </div>
            <button type="button" class="btn btn-light" onclick="viewSaved()">View Saved Searches</button>
            <button type="button" class="btn btn-light" onclick="logout()">Logout</button>
        </div>
    `;
  reloadID.innerHTML = newHTML;
}

function viewSaved() {
  window.location.href = "user.html";
}

async function loginUser() {
  loginOrCreate(`/api/auth/login`);
  const userName = document.querySelector("#userName")?.value;
  displayLogout(userName);
}

async function createUser() {
  loginOrCreate(`/api/auth/create`);
  const userName = document.querySelector("#userName")?.value;
  displayLogout(userName);
}

async function loginOrCreate(endpoint) {
  const userName = document.querySelector("#userName")?.value;
  const password = document.querySelector("#userPassword")?.value;
  const response = await fetch(endpoint, {
    method: "post",
    body: JSON.stringify({ email: userName, password: password }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  if (response.ok) {
    localStorage.setItem("userName", userName);
    window.location.reload();
  } else {
    const body = await response.json();
    const modalEl = document.querySelector("#msgModal");
    modalEl.querySelector(".modal-body").textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

function logout() {
  localStorage.removeItem("userName");
  fetch(`/api/auth/logout`, {
    method: "delete",
  }).then(() => window.location.reload());
}

async function getUser(userName) {
  // See if we have a user with the given email (username).
  const response = await fetch(`/api/user/${userName}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}
