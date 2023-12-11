import React from "react";

export function User() {
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
        <div className="'d-flex flex-column m-3" id="DisplayLogin">
          <div className="text-center m-3" id="reloadName"></div>
          <div className="text-center m-3 row" id="reloadData"></div>
        </div>
        <hr />
        <div className="m-2">
          <div className="h2 m-2">Chat</div>
          <div className="m-2" id="chat">
            <button onclick="chat()" className="text-bg-danger rounded-3">
              Chat
            </button>
          </div>
          <div className="m-2" id="chatBack"></div>
          <div className="m-2" id="reply"></div>
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
            className="col text-center border-start border-danger m-4"
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
      <script src="user.js"></script>
    </body>
  );
}
