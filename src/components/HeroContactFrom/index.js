import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  clearErrors,
  createQuotation,
} from "../../Redux/actions/QuotationActions";
import { NEW_QUOTATION_RESET } from "../../Redux/constants/QuotationConstants";

const HeroContactFrom = () => {
  const customId = "custom-id-yes";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});

  const newQuotation = useSelector((state) => state.newQuotation);

  const { loading, error: errorQuotation, success } = newQuotation;

  useEffect(() => {
    if (errorQuotation) {
      toast.error(errorQuotation, {
        toastId: customId,
      });
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Request Submitted Successfully", {
        toastId: customId,
      });

      dispatch({ type: NEW_QUOTATION_RESET });
    }
  }, [dispatch, toast, errorQuotation, success]);

  const submitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("message", message);

    if (name === "") {
      error.name = "Please enter your name";
    }
    if (email === "") {
      error.email = "Please enter your email";
    }

    if (message === "") {
      error.message = "Select your event list";
    }

    if (error) {
      setError({
        error,
      });
    }
    if (error.name === "" && error.email === "" && error.message === "") {
      setName("");
      setEmail("");
      setMessage("");
    }

    dispatch(createQuotation(myForm));

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="hx-hero-contact">
      <div className="hx-contact-form">
        <h2>Request a Quote</h2>
        <p>Just provide some basic information about the service you need .</p>
        <form onSubmit={submitHandler} className="form">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="form-field">
                <input
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <p>{error.name ? error.name : ""}</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-field">
                <input
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <p>{error.email ? error.email : ""}</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-field">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-submit">
                <button type="submit" className="theme-btn">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroContactFrom;
