import React from "react";

export function Login() {
  return (
    <main>
      <div className="d-flex flex-row row-3 m-3">
        <div className="w-25">
          <h3>Services</h3>
          <ul>
            <li>Carpet</li>
            <li>Tile</li>
            <li>Hardwood</li>
            <li>Laminent</li>
            <li>Vinyl</li>
          </ul>
        </div>
        <div className="d-flex flex-column text-center">
          <span className="lead mb-2">Here are some examples of our work!</span>
          <div className="d-flex flex-row justify-content-around gap-3">
            <img src="images/flooring1.jpg" alt="Flooring 1" height="300" />
            <img src="images/flooring2.jpg" alt="Flooring 2" height="300" />
            <img src="images/flooring3.jpg" alt="Flooring 3" height="300" />
          </div>
        </div>
      </div>
    </main>
  );
}
