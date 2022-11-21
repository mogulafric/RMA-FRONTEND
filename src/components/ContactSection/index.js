import React from "react";
import ContactForm from "../ContactFrom";
import "./style.css";
import contactimg from "../../images/contact/contact4.jpg";

const ContactSection = () => {
  return (
    <div className="hx-contact-area ptb-100-70">
      <div className="container">
        <div className="row">
          <div className="col col-lg-7 col-md-12 col-sm-12">
            <div className="hx-contact-content">
              <div className="row">
                <h2>Book An Appointment</h2>
              </div>
              <div className="hx-contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hx-contact-img">
              <img src={contactimg} alt="" height="290" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
