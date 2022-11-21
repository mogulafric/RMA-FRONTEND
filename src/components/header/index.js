import React, { useMemo } from "react";
import Logo from "../../images/logo/MainLogo.jpg";
import { Link } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu";
import HeaderTopbar from "../../components/HeaderTopbar";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { listBusiness } from "../../Redux/actions/CompanyActions";

const Header = (props) => {
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

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <>
      <header>
        <HeaderTopbar htClass={props.htClass} />
        <div className={`hx-header-style-1 ${props.hClass}`} id="sticky-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-7 col-sm-8 col-7 col-t">
                <div className="logo">
                  <Link onClick={ClickHandler} to="/home">
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
              </div>
              <div className="col-lg-8 d-none d-lg-block col-m">
                <div className="main-menu">
                  <nav className="nav_mobile_menu">
                    <ul>
                      <li className="active">
                        <Link onClick={ClickHandler} to="/">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/about">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/service">
                          Services
                        </Link>
                        {/* <ul className="submenu">
                          <li>
                            <Link onClick={ClickHandler} to="/service">
                              service
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/service-details">
                              service details
                            </Link>
                          </li>
                        </ul> */}
                      </li>

                      <li>
                        <Link onClick={ClickHandler} to="/contact">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} to="/">
                          <i className="fa fa-user"></i>
                        </Link>
                        <ul className="submenu">
                          <li>
                            <Link onClick={ClickHandler} to="/login">
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/signup">
                              Register
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-2 col-2 search col-t">
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="fa fa-search"></i>
                    </Link>
                    <ul>
                      <li>
                        <form action="search" onSubmit={SubmitHandler}>
                          <input type="text" placeholder="search here.." />
                          <button>
                            <i className="fa fa-search"></i>
                          </button>
                        </form>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-lg-1 col-md-2 col-sm-2 col-2 d-block d-lg-none">
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
