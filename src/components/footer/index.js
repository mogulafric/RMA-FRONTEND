import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo/MainLogo.jpg";
import n1 from "../../images/footer/img-1.jpg";
import n2 from "../../images/footer/img-2.jpg";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { listBusiness } from "../../Redux/actions/CompanyActions";
import { getService } from "../../Redux/actions/ServiceActions";
import { toast } from "react-toastify";

const Footer = (props) => {
  const dispatch = useDispatch();

  const { error, company, loading } = useSelector(
    (state) => state.companyDetails
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch(listBusiness());
  }, [dispatch, error]);

  const objCompany = Object.assign({}, company);

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

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="hx-site-footer-area">
      <div className="hx-site-footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 footer-t">
              <div className="hx-site-logo">
                <Link to="/">
                  {company ? (
                    <img
                      className="logo"
                      src={objCompany[0]?.images[0]?.url}
                      alt="company logo"
                    />
                  ) : (
                    <img className="logo" src={Logo} alt="company logo" />
                  )}
                </Link>
              </div>
              <p>{objCompany[0]?.companyMotto}</p>
              <div className="social">
                <ul className="d-flex">
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="fa fa-google-plus" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-6 footer-t">
              <div className="hx-site-footer-link">
                <h3>Recent post</h3>
                <div className="hx-latest-section">
                  <div className="posts">
                    <div className="post">
                      <div className="img-holder">
                        <img src={n1} alt="" />
                      </div>
                      <div className="details">
                        <p>Most Importent Issue For your car.</p>
                        <span>18 Feb 2019</span>
                      </div>
                    </div>
                    <div className="post">
                      <div className="img-holder">
                        <img src={n2} alt="" />
                      </div>
                      <div className="details">
                        <p>Most Importent Issue For your car.</p>
                        <span>18 Feb 2019</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6 col-sm-6 footer-t">
              <div className="hx-site-footer-adress">
                <h3>Address</h3>
                <div className="adress-section">
                  <ul>
                    <li>Head Office Address</li>
                    <li>{objCompany[0]?.location}</li>
                    <li>{objCompany[0]?.city}</li>
                  </ul>
                  <ul className="ad">
                    <li>
                      <span>Phone:</span> {objCompany[0]?.phone}
                    </li>
                    <li>
                      <span>Email:</span> {objCompany[0]?.email}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 footer-t">
              <div className="hx-site-footer-service">
                <h3>Services</h3>
                <div className="service-section">
                  <ul>
                    {services?.map((service, Sitem) => (
                      <>
                        <li key={Sitem}>
                          <Link
                            onClick={ClickHandler}
                            to={`/service/${service._id}`}
                          >
                            {service?.name}
                          </Link>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hx-site-footer-bottom">
        <div className="container">
          <div className="hx-site-footer-bottom-content">
            <div className="row">
              <div className="col-12">
                <span>
                  Privacy Policy | © {new Date().getFullYear()}{" "}
                  <Link onClick={ClickHandler} to="/home">
                    {objCompany[0]?.companyName}.
                  </Link>{" "}
                  All rights reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
