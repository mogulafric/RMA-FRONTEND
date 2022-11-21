import React, { useEffect } from "react";
import abimg from "../../images/about/about1.jpg";
import VideoModal from "../ModalVideo";
import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { listBusiness } from "../../Redux/actions/CompanyActions";

//html string to reactjs
import ReactHtmlParser from "react-html-parser";

//end

const About = (props) => {
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

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="hx-about-style-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="hx-about-content">
              <div className="hx-site-title">
                <span>About Our Company</span>
                <h2>How We Can Help you</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-m">
            <div className="hx-about-img">
              <img src={abimg} alt="" height="400" width="500" />
            </div>
            <div className="video-btn">
              <VideoModal />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {ReactHtmlParser(objCompany[0]?.aboutUs)}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p style={{ fontWeight: "bold" }}>Core Values</p>
            <ol className="olStyleImgValues">
              <li> Professionalism</li>
              <li> Quality Assurance</li>
              <li> Timely delivery</li>
              <li> Efficiency</li>
              <li> Innovation</li>
              <li> Customer experience</li>
              <li> Affordability</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
