import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

import primg1 from "../../images/work/breaks-repair.jpg";
import primg2 from "../../images/work/tire-replacement.jpg";
import primg3 from "../../images/work/transmission.jpg";
import primg4 from "../../images/work/diagnostic.jpg";
import primg5 from "../../images/work/batteries.jpg";
import primg6 from "../../images/work/engine-repair.jpg";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getService } from "../../Redux/actions/ServiceActions";
import { useEffect } from "react";
import Loading from "../More/Loader";

const PricingPlan = (props) => {
  const path = useNavigate();
  const dispatch = useDispatch();

  const { error, services, loading } = useSelector((state) => state.services);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getService());
  }, [dispatch, error, path]);

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // const Pricing = [
  //   {
  //     Id: "1",
  //     PrImg: primg1,
  //     price: "$25",
  //     title: "Breaks repair",
  //     des: "Full Service",
  //     link: "/pricing",
  //   },
  //   {
  //     Id: "2",
  //     PrImg: primg2,
  //     price: "$35",
  //     title: "Tires Replacement",
  //     des: "Full Service",
  //     link: "/pricing",
  //   },
  //   {
  //     Id: "3",
  //     PrImg: primg3,
  //     price: "$45",
  //     title: "Transmission",
  //     des: "Full Service",
  //     link: "/pricing",
  //   },
  //   {
  //     Id: "4",
  //     PrImg: primg4,
  //     price: "$65",
  //     title: "Diagnostic",
  //     des: "Full Service",
  //     link: "/pricing",
  //   },
  //   {
  //     Id: "5",
  //     PrImg: primg5,
  //     price: "$50",
  //     title: "Batteries",
  //     des: "Full Service",
  //     link: "/pricing",
  //   },
  //   {
  //     Id: "6",
  //     PrImg: primg6,
  //     price: "$550",
  //     title: "Engine repair",
  //     des: "Full Service",
  //     link: "/pricing",
  //   },
  // ];

  return (
    <div className="hx-pricing-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hx-site-title-1 text-center">
              <span>Best Pricing Plan</span>
              <h2>Services Packages</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="hx-pricing-content tabs-site-button">
              <div className="row hx-pricing-tabs">
                <div className="col-lg-2 col-md-12">
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "1" })}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        <i className="fi flaticon-turbo"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "2" })}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        <i className="fi flaticon-tyre"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "3" })}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        <i className="fi flaticon-car-1"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="hx-tab-content">
                    <TabContent activeTab={activeTab}>
                      {loading ? (
                        <Loading />
                      ) : (
                        <>
                          {services?.map((service, pitem) => (
                            <TabPane tabId={service._id} key={pitem}>
                              <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                  <div className="hx-pricing-wrap">
                                    <div className="hx-pricing-single">
                                      <div className="hx-pricing-img">
                                        <img
                                          src={service.images[0].url}
                                          alt="image"
                                        />
                                      </div>
                                      <div className="hx-pricing-text">
                                        <span>{service.price}</span>
                                        {/* <h4>
                                          <Link to={pricing.link}>
                                            {pricing.name}
                                          </Link>
                                        </h4> */}
                                        <p>{service.description}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </TabPane>
                          ))}
                        </>
                      )}
                    </TabContent>
                  </div>
                </div>
                <div className="col-lg-2 col-md-12">
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "4" })}
                        onClick={() => {
                          toggle("4");
                        }}
                      >
                        <i className="fi flaticon-car-repair"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "5" })}
                        onClick={() => {
                          toggle("5");
                        }}
                      >
                        <i className="fi flaticon-battery"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "6" })}
                        onClick={() => {
                          toggle("6");
                        }}
                      >
                        <i className="fi flaticon-electricity"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
