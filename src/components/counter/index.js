import React from "react";
import "./style.css";

const CounterSection = (props) => {
  return (
    <div className={`hx-counter-area ${props.counterClass}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hx-counter-grids">
              <div className="grid">
                <div className="hx-counter-icon">
                  <i className="fi flaticon-worker"></i>
                </div>
                <div>
                  <h2>
                    <span className="odometer" data-count="300">
                      300
                    </span>
                    +
                  </h2>
                </div>
                <p>Expert Technicians</p>
              </div>
              <div className="grid">
                <div className="hx-counter-icon">
                  <i className="fi flaticon-employee"></i>
                </div>
                <div>
                  <h2>
                    <span className="odometer" data-count="1026">
                      1026
                    </span>
                  </h2>
                </div>
                <p>Satisfied Client</p>
              </div>
              <div className="grid">
                <div className="hx-counter-icon">
                  <i className="fi flaticon-business-and-finance"></i>
                </div>
                <div>
                  <h2>
                    <span className="odometer" data-count="25">
                      25
                    </span>
                    +
                  </h2>
                </div>
                <p>Years Experience</p>
              </div>
              <div className="grid">
                <div className="hx-counter-icon">
                  <i className="fi flaticon-car"></i>
                </div>
                <div>
                  <h2>
                    <span className="odometer" data-count="3215">
                      3215
                    </span>
                  </h2>
                </div>
                <p>Complete Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
