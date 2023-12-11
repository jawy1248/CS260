(async () => {
  const userName = localStorage.getItem("userName");
  if (userName) {
    loadSearches();
  } else {
    displayPleaseLogin();
  }
})();

async function loadSearches() {
  let pic1HTML =
    '<div class="col d-flex flex-column m-3">' +
    '<span class="h5">Furniture Set 1</span>' +
    '<div class="text-center"><img class="m-1 rounded-3" src="images/furn/furn1.jpeg" alt="Furniture Set 1" width="300" /></div>' +
    "</div>";

  let pic2HTML =
    '<div class="col d-flex flex-column m-3">' +
    '<span class="h5">Furniture Set 2</span>' +
    '<div class="text-center"><img class="m-1 rounded-3" src="images/furn/furn2.jpg" alt="Furniture Set 2" width="300" /></div>' +
    "</div>";

  let pic3HTML =
    '<div class="col d-flex flex-column m-3">' +
    '<span class="h5">Furniture Set 3</span>' +
    '<div class="text-center"><img class="m-1 rounded-3" src="images/furn/furn3.jpg" alt="Furniture Set 3" width="300" /></div>' +
    "</div>";

  let pic4HTML =
    '<div class="col d-flex flex-column m-3">' +
    '<span class="h5">Furniture Set 4</span>' +
    '<div class="text-center"><img class="m-1 rounded-3" src="images/furn/furn4.jpg" alt="Furniture Set 4" width="300" /></div>' +
    "</div>";

  let pic5HTML =
    '<div class="col d-flex flex-column m-3">' +
    '<span class="h5">Furniture Set 5</span>' +
    '<div class="text-center"><img class="m-1 rounded-3" src="images/furn/furn5.jpg" alt="Furniture Set 5" width="300" /></div>' +
    "</div>";

  let pic6HTML =
    '<div class="col d-flex flex-column m-3">' +
    '<span class="h5">Furniture Set 6</span>' +
    '<div class="text-center"><img class="m-1 rounded-3" src="images/furn/furn6.jpg" alt="Furniture Set 6" width="300" /></div>' +
    "</div>";

  let picHTML = [pic1HTML, pic2HTML, pic3HTML, pic4HTML, pic5HTML, pic6HTML];

  try {
    const response = await fetch("/api/saved");
    searches = await response.json();
  } catch {
    console.log("Error getting searches");
  }

  newHTML = "";
  const userName = localStorage.getItem("userName");
  for (const [i, searchItem] of searches.entries()) {
    if (searchItem.email === userName) {
      newHTML += picHTML[searchItem.search - 1];
    }
  }

  displaySearches(newHTML);
}

function displaySearches(HTML) {
  let usernameText = localStorage.getItem("userName");
  const reloadID = document.getElementById("reloadName");
  const reloadID2 = document.getElementById("reloadData");
  reloadID.innerHTML = `Welcome <lead><b>${usernameText}</b></lead>, here are your saved searches\n<button type="button" class="btn btn-danger" onclick="logout()">Logout</button>`;
  reloadID2.innerHTML = HTML;
}

function displayPleaseLogin() {
  let HTML = `
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

  const reloadID = document.getElementById("reloadName");
  const reloadID2 = document.getElementById("reloadData");
  reloadID.innerHTML = "Welcome, please login to see your saved searches";
  reloadID2.innerHTML = HTML;
}
