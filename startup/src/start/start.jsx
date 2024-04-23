import React from "react";

export function Start() {
  return (
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
            his youth learning the perfected craft. At Wynn's we place emphasis
            on customly perfected work ensuring the highest quality outcome
            availiable in the luxury flooring industry.
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
                  got married in 1990 and started their family. Post-graduation,
                  they moved back to Ashton to start their new lives. They
                  bought Wynn's Furniture in 1993 have been the owners ever
                  since. They have 5 children, each of which they are incredibly
                  proud of.
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
                  getting married in 2014, they started a family and are now up
                  to 3 children. In 2022, they become partners in Wynn's
                  Furniture and plan to completely take over when Sam and Stacy
                  retire.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
