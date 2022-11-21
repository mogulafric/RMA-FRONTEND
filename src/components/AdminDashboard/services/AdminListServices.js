import React, { useEffect } from "react";
import MetaData from "../../More/Metadata";
import Footer from "../dashboard/Footer";
import Header from "../dashboard/Header";
import SideNav from "../dashboard/SideNav";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DataGrid } from "@material-ui/data-grid";
import {
  clearErrors,
  deleteService,
  getAdminServices,
} from "../../../Redux/actions/ServiceActions";
import Loading from "../../More/Loader";

const AdminListServices = () => {
  const path = useNavigate();
  const dispatch = useDispatch();

  const { error, services, loading } = useSelector((state) => state.services);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteService
  );

  const deleteServiceHandler = (id) => {
    dispatch(deleteService(id));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Service Removed Successfully");
      path("/admin/services");
      dispatch({ type: DELETE_BANNER_RESET });
    }
    dispatch(getAdminServices());
  }, [dispatch, toast, error, path, isDeleted, deleteError]);

  const columns = [
    { field: "id", headerName: "ID", minWidth: 50, flex: 0.3 },

    {
      field: "name",
      headerName: "Service Name",
      minWidth: 50,
      flex: 0.4,
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 50,
      flex: 0.8,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/edit/service/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteServiceHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  services &&
    services.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        description: item.description,
        price: item.price,
        ratings: item.ratings,
      });
    });
  return (
    <>
      <MetaData title={`ALL Services | RMAutomotive`} />
      <Header />
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Services</h1>
              </div>
              {/* /.col */}

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <i className="nav-icon fa fa-tachometer-alt text-aqua" />
                    <a href="#"> Home </a>
                  </li>

                  <li className="breadcrumb-item active">Services</li>
                  <li className="breadcrumb-item active">All Services</li>
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
            <div className="card card-info">
              <div className="card-header">
                <h3 className="card-title">List Services</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="remove"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                {loading ? (
                  <Loading />
                ) : (
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    disableSelectionOnClick
                    className="serviceListTable"
                    autoHeight
                  />
                )}
              </div>
              <div className="card-footer"></div>
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

export default AdminListServices;
