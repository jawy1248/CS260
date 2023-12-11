import React from "react";

export function Login() {
  return (
    <body class="text-bg-dark">
      <header class="container-fluid sticky-top text-bg-danger bg-gradient">
        <div class="text-center">
          <h1>Wynn's Flooring and Home Furnishings</h1>
        </div>
        <div>
          <nav class="nav nav-tabs" role="navigation">
            <div class="container-fluid d-flex justify-content-around">
              <a href="index.html" class="nav-link text-white">
                Home
              </a>
              <a href="furn.html" class="nav-link text-white">
                Furniture
              </a>
              <a href="lock.html" class="nav-link text-white">
                Locksmith
              </a>
              <a href="floor.html" class="nav-link active text-bg-dark">
                Floor Coverings
              </a>
              <a href="window.html" class="nav-link text-white">
                Window Coverings
              </a>
              <a href="user.html" class="nav-link text-white">
                Saved Searches
              </a>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div class="d-flex flex-row row-3 m-3">
          <div class="w-25">
            <h3>Services</h3>
            <ul>
              <li>Carpet</li>
              <li>Tile</li>
              <li>Hardwood</li>
              <li>Laminent</li>
              <li>Vinyl</li>
            </ul>
          </div>
          <div class="d-flex flex-column text-center">
            <span class="lead mb-2">Here are some examples of our work!</span>
            <div class="d-flex flex-row justify-content-around gap-3">
              <img src="images/flooring1.jpg" alt="Flooring 1" height="300" />
              <img src="images/flooring2.jpg" alt="Flooring 2" height="300" />
              <img src="images/flooring3.jpg" alt="Flooring 3" height="300" />
            </div>
          </div>
        </div>
      </main>
      <footer class="container-fluid border-top border-danger border-4">
        <div class="d-flex flex-row m-3 mb-0" id="contact_us">
          <div class="col m-0 p-0" id="addresses">
            <span>
              <h2>Contact Us</h2>
            </span>
            <div class="d-flex flex-row justify-content-around">
              <div class="col">
                <div class="d-flex flex-column mb-3">
                  <span class="text-danger text-decoration-underline">
                    <b>Physical Address</b>
                  </span>
                  <span>607 Main St</span>
                  <span>Ashton, ID 83420</span>
                </div>
                <div class="d-flex flex-column mt-3">
                  <span class="text-danger text-decoration-underline">
                    <b>Mailing Address</b>
                  </span>
                  <span>P.O. Box 609</span>
                  <span>Ashton, ID 83420</span>
                </div>
              </div>
              <div class="col">
                <div class="d-flex flex-column mb-3">
                  <span class="text-danger text-decoration-underline">
                    <b>Phones</b>
                  </span>
                  <span>
                    <i>Store:</i>{" "}
                    <a
                      href="tel:2086523951"
                      class="link-danger text-decoration-none"
                    >
                      208-652-3951
                    </a>
                  </span>
                  <span>
                    <i>Sam:</i>{" "}
                    <a
                      href="tel:2087053951"
                      class="link-danger text-decoration-none"
                    >
                      208-705-3951
                    </a>
                  </span>
                  <span>
                    <i>Ryker:</i>{" "}
                    <a
                      href="tel:2083907527"
                      class="link-danger text-decoration-none"
                    >
                      208-390-7527
                    </a>
                  </span>
                  <span>
                    <i>Taylor:</i>{" "}
                    <a
                      href="tel:2082236803"
                      class="link-danger text-decoration-none"
                    >
                      208-223-6803
                    </a>
                  </span>
                </div>
                <div class="d-flex flex-column mt-3">
                  <span class="text-danger text-decoration-underline">
                    <b>Email</b>
                  </span>
                  <span>
                    <i>Sam:</i>{" "}
                    <a
                      href="mailto: samwynn64@gmail.com"
                      class="link-danger text-decoration-none"
                    >
                      samwynn64@gmail.com
                    </a>
                  </span>
                  <span>
                    <i>Ryker:</i>{" "}
                    <a
                      href="mailto: rykerwynn@gmail.com"
                      class="link-danger text-decoration-none"
                    >
                      rykerwynn@gmail.com
                    </a>
                  </span>
                  <span>
                    <i>Taylor:</i>{" "}
                    <a
                      href="mailto: taylorwynn14@gmail.com"
                      class="link-danger text-decoration-none"
                    >
                      taylorwynn14@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col text-center border-start border-end border-danger m-4"
            id="googleMaps"
          >
            <span>
              <h2>Google Maps</h2>
            </span>
            <span>
              <img
                src="images/mapsHolder.png"
                alt="Interactive Map Widget"
                height="230"
              />
            </span>
          </div>
          <div class="text-center btn-group-vertical" id="LoginBox">
            <div class="border border-2 border-dark rounded-5 p-3 text-bg-danger bg-gradient">
              <h4>Login or Create an Account</h4>
              <div class="input-group flex-nowrap m-2">
                <span class="input-group-text">Username</span>
                <input
                  type="text"
                  class="form-control me-4"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  id="userName"
                />
              </div>
              <div class="input-group flex-nowrap m-2">
                <span class="input-group-text">Password</span>
                <input
                  type="password"
                  class="form-control me-4"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="addon-wrapping"
                  id="userPassword"
                />
              </div>
              <button type="button" class="btn btn-light" onclick="loginUser()">
                Login
              </button>
              <button
                type="button"
                class="btn btn-light"
                onclick="createUser()"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div class="m-3 mt-0 text-bg-dark sticky-bottom">
        &copy 2024 Wynn's Flooring and Home Furnishings
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"
      ></script>
      <script src="login.js"></script>
    </body>
  );
}