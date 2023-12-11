import React from "react";

export function Floor() {
  return (
    <body className="text-bg-dark">
      <header className="container-fluid sticky-top text-bg-danger bg-gradient">
        <div className="text-center">
          <h1>Wynn's Flooring and Home Furnishings</h1>
        </div>
        <div>
          <nav className="nav nav-tabs" role="navigation">
            <div className="container-fluid d-flex justify-content-around">
              <NavLink to="app" className="nav-link active text-bg-dark">
                Home
              </NavLink>
              <NavLink to="furn" className="nav-link text-white">
                Furniture
              </NavLink>
              <NavLink to="lock" className="nav-link text-white">
                Locksmith
              </NavLink>
              <NavLink to="floor" className="nav-link text-white">
                Floor Coverings
              </NavLink>
              <NavLink to="window" className="nav-link text-white">
                Window Coverings
              </NavLink>
              <NavLink to="user" className="nav-link text-white">
                Saved Searches
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="'d-flex flex-column m-3">
          <div className="text-center lead">
            We offer high quality furniture from multiple suppliers. Come in
            store to see the products in more detail!
          </div>
          <div className="text-center m-3">
            <div className="d-grid">
              <div className="row">
                <div className="col d-flex flex-column m-3">
                  <span className="h5">Furniture Set 1</span>
                  <div className="text-center">
                    <img
                      className="m-1 rounded-3"
                      src="images/furn/furn1.jpeg"
                      alt="Furniture Set 1"
                      width="300"
                    />
                  </div>
                  <button
                    className="btn btn-light"
                    onclick="save(1)"
                    id="save1"
                  >
                    Save
                  </button>
                </div>
                <div className="col d-flex flex-column m-3">
                  <span className="h5">Furniture Set 2</span>
                  <div className="text-center">
                    <img
                      className="m-1 rounded-3"
                      src="images/furn/furn2.jpg"
                      alt="Furniture Set 2"
                      width="300"
                    />
                  </div>
                  <button
                    className="btn btn-light"
                    onclick="save(2)"
                    id="save2"
                  >
                    Save
                  </button>
                </div>
                <div className="col d-flex flex-column m-3">
                  <span className="h5">Furniture Set 3</span>
                  <div className="text-center">
                    <img
                      className="m-1 rounded-3"
                      src="images/furn/furn3.jpg"
                      alt="Furniture Set 3"
                      width="300"
                    />
                  </div>
                  <button
                    className="btn btn-light"
                    onclick="save(3)"
                    id="save3"
                  >
                    Save
                  </button>
                </div>
                <div className="col d-flex flex-column m-3">
                  <span className="h5">Furniture Set 4</span>
                  <div className="text-center">
                    <img
                      className="m-1 rounded-3"
                      src="images/furn/furn4.jpg"
                      alt="Furniture Set 4"
                      width="300"
                    />
                  </div>
                  <button
                    className="btn btn-light"
                    onclick="save(4)"
                    id="save4"
                  >
                    Save
                  </button>
                </div>
                <div className="col d-flex flex-column m-3">
                  <span className="h5">Furniture Set 5</span>
                  <div className="text-center">
                    <img
                      className="m-1 rounded-3"
                      src="images/furn/furn5.jpg"
                      alt="Furniture Set 5"
                      width="300"
                    />
                  </div>
                  <button
                    className="btn btn-light"
                    onclick="save(5)"
                    id="save5"
                  >
                    Save
                  </button>
                </div>
                <div className="col d-flex flex-column m-3">
                  <span className="h5">Furniture Set 6</span>
                  <div className="text-center">
                    <img
                      className="m-1 rounded-3"
                      src="images/furn/furn6.jpg"
                      alt="Furniture Set 6"
                      width="300"
                    />
                  </div>
                  <button
                    className="btn btn-light"
                    onclick="save(6)"
                    id="save6"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="container-fluid border-top border-danger border-4">
        <div className="d-flex flex-row m-3 mb-0" id="contact_us">
          <div className="col m-0 p-0" id="addresses">
            <span>
              <h2>Contact Us</h2>
            </span>
            <div className="d-flex flex-row justify-content-around">
              <div className="col">
                <div className="d-flex flex-column mb-3">
                  <span className="text-danger text-decoration-underline">
                    <b>Physical Address</b>
                  </span>
                  <span>607 Main St</span>
                  <span>Ashton, ID 83420</span>
                </div>
                <div className="d-flex flex-column mt-3">
                  <span className="text-danger text-decoration-underline">
                    <b>Mailing Address</b>
                  </span>
                  <span>P.O. Box 609</span>
                  <span>Ashton, ID 83420</span>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column mb-3">
                  <span className="text-danger text-decoration-underline">
                    <b>Phones</b>
                  </span>
                  <span>
                    <i>Store:</i>
                    <a
                      href="tel:2086523951"
                      className="link-danger text-decoration-none"
                    >
                      208-652-3951
                    </a>
                  </span>
                  <span>
                    <i>Sam:</i>
                    <a
                      href="tel:2087053951"
                      className="link-danger text-decoration-none"
                    >
                      208-705-3951
                    </a>
                  </span>
                  <span>
                    <i>Ryker:</i>
                    <a
                      href="tel:2083907527"
                      className="link-danger text-decoration-none"
                    >
                      208-390-7527
                    </a>
                  </span>
                  <span>
                    <i>Taylor:</i>
                    <a
                      href="tel:2082236803"
                      className="link-danger text-decoration-none"
                    >
                      208-223-6803
                    </a>
                  </span>
                </div>
                <div className="d-flex flex-column mt-3">
                  <span className="text-danger text-decoration-underline">
                    <b>Email</b>
                  </span>
                  <span>
                    <i>Sam:</i>
                    <a
                      href="mailto: samwynn64@gmail.com"
                      className="link-danger text-decoration-none"
                    >
                      samwynn64@gmail.com
                    </a>
                  </span>
                  <span>
                    <i>Ryker:</i>
                    <a
                      href="mailto: rykerwynn@gmail.com"
                      className="link-danger text-decoration-none"
                    >
                      rykerwynn@gmail.com
                    </a>
                  </span>
                  <span>
                    <i>Taylor:</i>
                    <a
                      href="mailto: taylorwynn14@gmail.com"
                      className="link-danger text-decoration-none"
                    >
                      taylorwynn14@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col text-center border-start border-end border-danger m-4"
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
          <div className="text-center btn-group-vertical" id="LoginBox">
            <div className="border border-2 border-dark rounded-5 p-3 text-bg-danger bg-gradient">
              <h4>Login or Create an Account</h4>
              <div className="input-group flex-nowrap m-2">
                <span className="input-group-text">Username</span>
                <input
                  type="text"
                  className="form-control me-4"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  id="userName"
                />
              </div>
              <div className="input-group flex-nowrap m-2">
                <span className="input-group-text">Password</span>
                <input
                  type="password"
                  className="form-control me-4"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="addon-wrapping"
                  id="userPassword"
                />
              </div>
              <button
                type="button"
                className="btn btn-light"
                onclick="loginUser()"
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-light"
                onclick="createUser()"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="m-3 mt-0 text-bg-dark sticky-bottom">
        &copy 2024 Wynn's Flooring and Home Furnishings
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossorigin="anonymous"
      ></script>
      <script src="login.js"></script>
      <script src="furn.js"></script>
    </body>
  );
}
