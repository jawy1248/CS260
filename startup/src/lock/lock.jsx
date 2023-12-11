import React from "react";

export function Lock() {
  return (
    <main>
      <div className="d-flex flex-column m-3">
        <div className="text-center mb-3 lead">
          We offer a vast variety of locksmithing services ranging from car and
          home lockouts, making and copying keys, and opening locks and safes.
        </div>
        <div className="row">
          <div className="col ms-3 text-center">
            <button className="rounded-3 p-2 h4 text-bg-dark" onclick="table()">
              Key Prices
            </button>
            <div className="text-center" id="output"></div>
          </div>
          <div className="col text-center">
            <img src="images/keys.png" alt="Locksmith Keys" width="300" />
          </div>
          <div className="col text-center">
            <img src="images/keys2.png" alt="Locksmith Keys 2" width="300" />
          </div>
        </div>
      </div>
    </main>
  );
}
