import React from "react";

export function Window() {
  return (
    <main>
      <div className="lead text-center mt-3">
        There is a wide variety of window coverings to choose from, to see more
        visit us in store!
      </div>
      <div className="d-flex flex-row row-3 m-3">
        <div className="w-50">
          <span>
            Here is a list of some of the suppliers we use for window coverings!
          </span>
          <ul>
            <li>Blynco</li>
            <li>Lutron</li>
          </ul>
        </div>
        <div className="d-flex flex-column text-center">
          <div className="d-flex flex-row justify-content-around gap-3">
            <img
              src="images/blinds1.jpg"
              alt="Window Coverings 1"
              width="300"
            />
            <img
              src="images/blinds2.jpg"
              alt="Window Coverings 2"
              width="300"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
