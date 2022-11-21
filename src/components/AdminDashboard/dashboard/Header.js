import React from "react";
import "./Header.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Redux/actions/UserActions";
import { toast } from "react-toastify";

const Header = () => {
  const path = useNavigate();

  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector((state) => state.user);

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
    path("/login");
    toast.success("Logout Successfully");
  };
  return (
    <>
      {" "}
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="pushmenu"
              to="/pos"
              // role="button"
            ></Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="pushmenu"
              to="/dashboard"
              // role="button"
            >
              <i className="fa fa-dashboard"></i>
              &nbsp;
              <span className="hidden-xs">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item dropdown user user-menu">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
            >
              <img
                src="/dist/img/user2-160x160.jpg"
                className="user-image img-circle elevation-2"
                alt="user image"
              />
              <span className="hidden-xs">Admin</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              {/* User image */}
              <li className="user-header bg-default">
                <img
                  src="/dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
                <p>Admin</p>
              </li>

              <li className="user-footer">
                <div className="float-left">
                  <Link to="/user/profile" className="btn btn-default btn-flat">
                    Profile
                  </Link>
                </div>
                <div className="float-right">
                  <Link
                    onClick={logoutUser}
                    className="btn btn-default btn-flat"
                  >
                    Sign out
                  </Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* /.navbar */}
    </>
  );
};

export default Header;
