import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearErrors,
  getAppointmentDetails,
} from "../../../Redux/actions/AppointmentActions";

import MetaData from "../../More/Metadata";
import Footer from "../dashboard/Footer";
import Header from "../dashboard/Header";
import SideNav from "../dashboard/SideNav";

const ViewAppointmentAdmin = () => {
  const customId = "custom-id-yes";
  const dispatch = useDispatch();

  const { error, appointment } = useSelector(
    (state) => state.appointmentDetails
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState(0);

  const { id: appointmentId } = useParams();

  useEffect(() => {
    if (appointment && appointment._id !== appointmentId) {
      dispatch(getAppointmentDetails(appointmentId));
    } else {
      setName(appointment.name);
      setEmail(appointment.email);
      setPhone(appointment.phone);
      setService(appointment.service);
      setMessage(appointment.message);
    }
    if (error) {
      toast.error(error, {
        toastId: customId,
      });
      dispatch(clearErrors());
    }
  }, [dispatch, error, appointmentId, appointment]);

  return (
    <>
      <MetaData title={`View Appointment | RMAutomotive`} />
      <Header />
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Appointment Preview</h1>
              </div>
              {/* /.col */}

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <i className="nav-icon fa fa-tachometer-alt text-aqua" />
                    <a href="#"> Home </a>
                  </li>

                  <li className="breadcrumb-item active">Appointment</li>
                  {/* <li className="breadcrumb-item active">Edit Banner</li> */}
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="container rounded bg-white mt-5 mb-5">
              {" "}
              <div className="row">
                {" "}
                {/* <div className="col-md-3 border-right"> </div>{" "} */}
                <div className="col-md-5 border-right">
                  {" "}
                  <div className="p-3 py-5">
                    {" "}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      {" "}
                      <h4 className="text-right">Appointment Details</h4>{" "}
                    </div>{" "}
                    <div className="row mt-2">
                      {" "}
                      <div className="col-md-12">
                        <label className="labels">Client Name</label>
                        <input
                          type="text"
                          readOnly
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control"
                          placeholder="first name"
                        />
                      </div>{" "}
                    </div>{" "}
                    <div className="row mt-3">
                      {" "}
                      <div className="col-md-12">
                        <label className="labels">Email Address</label>
                        <input
                          type="text"
                          readOnly
                          value={email}
                          className="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                          // className="form-control"
                          //   placeholder="enter phone number"
                        />
                      </div>{" "}
                    </div>{" "}
                    <div className="row mt-3">
                      {" "}
                      <div className="col-md-12">
                        <label className="labels">Phone Number</label>
                        <input
                          type="text"
                          readOnly
                          value={phone}
                          className="form-control"
                          onChange={(e) => setPhone(e.target.value)}
                          // className="form-control"
                          placeholder="enter phone number"
                        />
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-md-6">
                  {" "}
                  <div className="p-3 py-5">
                    {" "}
                    <br /> <br />{" "}
                    <div className="col-lg-12">
                      <label className="labels">
                        You can reply to this quote by sending email to client
                        via <a href={`mailto:${email}`}>{email}</a>
                      </label>
                    </div>{" "}
                    <div className="col-lg-12">
                      <label className="labels">Message</label>
                      <textarea
                        type="text"
                        readOnly
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-control"
                        placeholder=""
                        defaultValue
                      />
                    </div>{" "}
                    <div className="col-lg-12">
                      <label className="labels">Service Required</label>
                      <textarea
                        type="text"
                        readOnly
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="form-control"
                        placeholder=""
                        defaultValue
                      />
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </div>

          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      <SideNav />
      <Footer />
    </>
  );
};

export default ViewAppointmentAdmin;
