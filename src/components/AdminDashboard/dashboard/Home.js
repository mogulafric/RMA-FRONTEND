import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [countSuppliers, setCountSuppliers] = useState(0);
  const [countItems, setCountItems] = useState(0);
  const [countCustomers, setCountCustomers] = useState(0);

  const fetchSuppliers = async () => {
    var accessTokenObj = JSON.parse(localStorage.getItem("userInfo"));
    const token = accessTokenObj.token;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `/api/suppliers/countSuppliers/Count`,
      config
    );
    setCountSuppliers(await data.data);
  };

  const fetchItems = async () => {
    var accessTokenObj = JSON.parse(localStorage.getItem("userInfo"));
    const token = accessTokenObj.token;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`/api/items/countItems/Count`, config);
    setCountItems(await data.data);
  };

  const fetchCustomers = async () => {
    var accessTokenObj = JSON.parse(localStorage.getItem("userInfo"));
    const token = accessTokenObj.token;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `/api/customers/countCustomers/Count`,
      config
    );
    setCountCustomers(await data.data);
  };

  useEffect(() => {
    fetchSuppliers();
    fetchItems();
    fetchCustomers();
  }, []);

  return (
    <>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              {/* /.col */}

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <i className="fa fa-dashboard"></i>
                    {/* <i className="fa fa-dashboard text-aqua" /> */}
                    <a href="#"> Home</a>
                  </li>
                  {/* <li className="breadcrumb-item active">Dashboard v1</li> */}
                </ol>
              </div>

              {/* /.col */}
            </div>

            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}

            <div className="row">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>
                      {" "}
                      {countCustomers ? (
                        <span>{countCustomers}</span>
                      ) : (
                        <span>0</span>
                      )}
                    </h3>
                    <p>Services</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-users" />
                  </div>
                  <Link to="/admin/services" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>
                      {" "}
                      {countSuppliers ? (
                        <span>{countSuppliers}</span>
                      ) : (
                        <span>0</span>
                      )}
                    </h3>
                    <p>Banners</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-users" />
                  </div>
                  <Link to="/admin/banners" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>
                      {countItems ? <span>{countItems}</span> : <span>0</span>}
                    </h3>
                    <p>Messages</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-ios-paper-outline" />
                  </div>
                  <Link to="/items" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>4</h3>
                    <p>Quotes</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-ios-paper-outline" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
            </div>
            {/* Content */}

            {/* /.row (main row) */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </>
  );
};

export default Home;
