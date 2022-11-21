import React, { useState, useEffect, Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearErrors,
  createAppointment,
} from "../../Redux/actions/AppointmentActions";
import { NEW_APPOINTMENT_RESET } from "../../Redux/constants/AppointmentConstants";
import { toast } from "react-toastify";
import Loading from "../More/Loader";
import { getService } from "../../Redux/actions/ServiceActions";

const ContactForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});

  const newAppointment = useSelector((state) => state.newAppointment);

  const { loading, error: errorAppointment, success } = newAppointment;

  useEffect(() => {
    if (errorAppointment) {
      toast.error(errorAppointment);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Appointment Submitted Successfully");

      dispatch({ type: NEW_APPOINTMENT_RESET });
    }
  }, [dispatch, toast, errorAppointment, success]);

  const subimtHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("service", service);
    myForm.set("phone", phone);
    myForm.set("message", message);

    if (name === "") {
      error.name = "Please enter your name";
    }
    if (email === "") {
      error.email = "Please enter your email";
    }
    if (service === "") {
      error.service = "Please enter your service";
    }
    if (phone === "") {
      error.phone = "Please enter your phone number";
    }
    if (message === "") {
      error.message = "Select your event list";
    }

    if (error) {
      setError({
        error,
      });
    }
    if (
      error.name === "" &&
      error.email === "" &&
      error.phone === "" &&
      error.service === "" &&
      error.message === ""
    ) {
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
    }

    dispatch(createAppointment(myForm));

    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setMessage("");
  };

  //fetch services
  const {
    error: errorService,
    services,
    loading: loadingService,
  } = useSelector((state) => state.services);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getService());
  }, [dispatch, errorService]);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <>
          <form
            onSubmit={subimtHandler}
            encType="multipart/form-data"
            className="form"
          >
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="form-field">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  {error.name ? error.name : ""}
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-field">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    name="phone"
                    placeholder="Phone"
                  />
                  {error.phone ? error.phone : ""}
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-field">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  {error.email ? error.email : ""}
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-field">
                  <select
                    onChange={(e) => setService(e.target.value)}
                    value={service}
                    type="text"
                    name="service"
                    className="form-control"
                  >
                    <option>Service Select</option>
                    {services?.map((service, Sitem) => (
                      <>
                        <option key={Sitem}>{service?.name}</option>
                      </>
                    ))}
                  </select>

                  {error.service ? error.service : ""}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-field">
                  <textarea
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
        </>
      )}
    </Fragment>
  );
};
export default ContactForm;
