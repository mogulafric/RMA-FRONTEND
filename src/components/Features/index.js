import React from "react";

import "./style.css";

const Features = (props) => {
  return (
    <div className="hx-features-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-p">
            <div className="hx-features-item-2">
              <div className="hx-features-icon hx-features-icon-2">
                <i className="fi flaticon-clock"></i>
              </div>
              <div className="hx-features-content">
                <h3>Book Appointment</h3>
                <p>There are many variations of passages of Lorem</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="hx-features-item-2">
              <div className="hx-features-icon">
                <i className="fi flaticon-alarm-clock"></i>
              </div>
              <div className="hx-features-content">
                <h3>Save Your Time</h3>
                <p>There are many variations of passages of Lorem</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="hx-features-item-2">
              <div className="hx-features-icon">
                <i className="fi flaticon-money-bag"></i>
              </div>
              <div className="hx-features-content">
                <h3>Save Your Money</h3>
                <p>There are many variations of passages of Lorem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
