import "./SideNav.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo/MainLogo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { listBusiness } from "../../../Redux/actions/CompanyActions";

const SideNav = () => {
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

  return (
    <>
      {" "}
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="#" className="brand-link">
          <img
            src={objCompany[0]?.images[0]?.url}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">
            {objCompany[0]?.companyName}
          </span>
        </a>

        {/* Sidebar */}
        <div className="sidebar" style={{ color: "#fff" }}>
          {/* SidebarSearch Form */}

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column sidebar-menu"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

              <li class="nav-item">
                <Link to="/dashboard" class="nav-link">
                  {/* <i class="nav-icon fa fa-tachometer-alt text-aqua"></i> */}
                  <i className="fa fa-dashboard"></i>
                  <p> Dashboard</p>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon  fa fa-shopping-cart text-aqua" />
                  <p>
                    Company Profile
                    <i className="fa fa-angle-left right" />
                  </p>
                </a>

                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/company/create" className="nav-link">
                      <i className="fa fa-calculator nav-icon" />
                      <p>Add Company Details</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="nav-icon  fa fa-user text-aqua" />
                  <p>
                    Users
                    <i className="fa fa-angle-left right" />
                  </p>
                </a>

                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/user/create" className="nav-link">
                      <i className="fa fa-plus nav-icon" />
                      <p>Add User</p>
                    </Link>
                  </li>
                </ul>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/users" className="nav-link">
                      <i className="fa fa-user nav-icon" />
                      <p>All Users</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  <i className="nav-icon  fa fa-shopping-cart text-aqua" />
                  <p>
                    Banners
                    <i className="fa fa-angle-left right" />
                  </p>
                </a>

                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/banner/create" className="nav-link">
                      <i className="fa fa-calculator nav-icon" />
                      <p>Add Banner</p>
                    </Link>
                  </li>
                </ul>

                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/banners" className="nav-link">
                      <i className="fa fa-calculator nav-icon" />
                      <p>All Banners</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon  fa fa-shopping-cart text-aqua" />
                  <p>
                    Services
                    <i className="fa fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/service/create" className="nav-link">
                      <i className="fa fa-calculator nav-icon" />
                      <p>Add Service</p>
                    </Link>
                  </li>
                </ul>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/services" className="nav-link">
                      <i className="fa fa-calculator nav-icon" />
                      <p>All Services</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon  fa fa-shopping-cart text-aqua" />
                  <p>
                    Appointments
                    <i className="fa fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/appointments" className="nav-link">
                      <i className="fa fa-calculator nav-icon" />
                      <p>All Appointments</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon  fa fa-shopping-cart text-aqua" />
                  <p>
                    Quotations
                    <i className="fa fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/admin/quotations" className="nav-link">
                      <i className="fa fa-calculator nav-icon" />
                      <p>All Quotations</p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </>
  );
};

export default SideNav;
