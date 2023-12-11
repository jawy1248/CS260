import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

export default function App() {
  return (
    <body className="text-bg-dark">
      <header className="container-fluid sticky-top text-bg-danger bg-gradient">
        <div className="text-center">
          <h1>Wynn's Flooring and Home Furnishings</h1>
        </div>
        <div>
          <nav className="nav nav-tabs" role="navigation">
            <div className="container-fluid d-flex justify-content-around">
              <a href="index.html" className="nav-link active text-bg-dark">
                Home
              </a>
              <a href="furn.html" className="nav-link text-white">
                Furniture
              </a>
              <a href="lock.html" className="nav-link text-white">
                Locksmith
              </a>
              <a href="floor.html" className="nav-link text-white">
                Floor Coverings
              </a>
              <a href="window.html" className="nav-link text-white">
                Window Coverings
              </a>
              <a href="user.html" className="nav-link text-white">
                Saved Searches
              </a>
            </div>
          </nav>
        </div>
      </header>
      <main className="container-fluid">
        <div className="m-2 text-center">
          <a
            className="btn btn-danger bg-gradient text-center mt-3"
            role="button"
            href="https://github.com/jawy1248/CS260/tree/main/startup"
            target="_blank"
          >
            Carson's GitHub (For CS 260)
          </a>
        </div>
        <hr />
        <div className="m-2">
          <div>
            <h2>Inspirational Quote</h2>
          </div>
          <div id="quote" className="text-center fst-italic"></div>
        </div>
        <hr />
        <div>
          <div>
            <h2>About Us</h2>
          </div>
          <div className="d-flex flex-column">
            <span className="m-3">
              Wynn's Furniture is a three generation family owned business. Ross
              and Thayle Wynn started the business in 1947 after settling in
              Ashton, Idaho to raise their large family of 11. Ross raised his 6
              sons all learning the flooring industry. Their youngest son, Sam,
              spent much of his childhood and teenage years working with his
              brothers on the job sites before formally taking over the business
              in his adulthood. A generation later, Sam's oldest son, Ryker, did
              the same; working side by side with his dad and grandpa throughout
              his youth learning the perfected craft. At Wynn's we place
              emphasis on customly perfected work ensuring the highest quality
              outcome availiable in the luxury flooring industry.
            </span>
            <div className="d-flex justify-content-around">
              <div className="d-flex flex-column">
                <img
                  className="rounded-4 border border-2"
                  id="gRossPic"
                  src="/gRossPic.jpg"
                  alt="Ross Wynn, Founder"
                  height="300"
                />
                <span className="text-center lead">Ross and Thayle</span>
              </div>
              <div className="d-flex flex-column">
                <img
                  className="rounded-4 border border-2"
                  id="oldStore"
                  src="/oldStore.jpeg"
                  alt="Wynn's Furniture 1960"
                  height="300"
                />
                <span className="text-center lead">Wynn's, 1968</span>
              </div>
              <div className="d-flex flex-column">
                <img
                  className="rounded-4 border border-2"
                  id="newStore"
                  src="/newStore.jpg"
                  alt="Wynn's Furniture 2023"
                  height="300"
                />
                <span className="text-center lead">Wynn's, 2024</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div id="owners">
          <h2>Owners</h2>
          <div className="d-flex flex-row" id="ownersChild">
            <div className="col" id="samStacy">
              <div className="m-3 d-flex flex-column">
                <span className="text-center h4">Sam and Stacy</span>
                <div className="border border-2 rounded d-flex flex-row">
                  <img
                    className="rounded-1"
                    id="samStacy"
                    src="/samStacy.jpg"
                    alt="Sam and Stacy"
                    height="300"
                  />
                  <span className="text-center btn-group-vertical m-3">
                    Sam and Stacy met at Utah State University. They soon later
                    got married in 1990 and started their family.
                    Post-graduation, they moved back to Ashton to start their
                    new lives. They bought Wynn's Furniture in 1993 have been
                    the owners ever since. They have 5 children, each of which
                    they are incredibly proud of.
                  </span>
                </div>
              </div>
            </div>
            <div className="col" id="rykerTaylor">
              <div className="m-3 d-flex flex-column">
                <span className="text-center h4">Ryker and Taylor</span>
                <div className="border border-2 rounded d-flex flex-row">
                  <img
                    className="rounded-1"
                    id="rykerTaylor"
                    src="/rykerTaylor.jpg"
                    alt="Ryker and Taylor"
                    height="300"
                  />
                  <span className="text-center btn-group-vertical m-3">
                    Ryker and Taylor met at Brigham Young University. After
                    getting married in 2014, they started a family and are now
                    up to 3 children. In 2022, they become partners in Wynn's
                    Furniture and plan to completely take over when Sam and
                    Stacy retire.
                  </span>
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
                    <i>Store:</i>{" "}
                    <a
                      href="tel:2086523951"
                      className="link-danger text-decoration-none"
                    >
                      208-652-3951
                    </a>
                  </span>
                  <span>
                    <i>Sam:</i>{" "}
                    <a
                      href="tel:2087053951"
                      className="link-danger text-decoration-none"
                    >
                      208-705-3951
                    </a>
                  </span>
                  <span>
                    <i>Ryker:</i>{" "}
                    <a
                      href="tel:2083907527"
                      className="link-danger text-decoration-none"
                    >
                      208-390-7527
                    </a>
                  </span>
                  <span>
                    <i>Taylor:</i>{" "}
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
                    <i>Sam:</i>{" "}
                    <a
                      href="mailto: samwynn64@gmail.com"
                      className="link-danger text-decoration-none"
                    >
                      samwynn64@gmail.com
                    </a>
                  </span>
                  <span>
                    <i>Ryker:</i>{" "}
                    <a
                      href="mailto: rykerwynn@gmail.com"
                      className="link-danger text-decoration-none"
                    >
                      rykerwynn@gmail.com
                    </a>
                  </span>
                  <span>
                    <i>Taylor:</i>{" "}
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
                src="/mapsHolder.png"
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
      <script src="/login.js"></script>
    </body>
  );
}
