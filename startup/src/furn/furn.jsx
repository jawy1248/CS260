import React from "react";

export function Floor() {
  return (
    <main>
      <div className="'d-flex flex-column m-3">
        <div className="text-center lead">
          We offer high quality furniture from multiple suppliers. Come in store
          to see the products in more detail!
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
                <button className="btn btn-light" onclick="save(1)" id="save1">
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
                <button className="btn btn-light" onclick="save(2)" id="save2">
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
                <button className="btn btn-light" onclick="save(3)" id="save3">
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
                <button className="btn btn-light" onclick="save(4)" id="save4">
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
                <button className="btn btn-light" onclick="save(5)" id="save5">
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
                <button className="btn btn-light" onclick="save(6)" id="save6">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
