import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DataGrid } from "@material-ui/data-grid";

import MetaData from "../../More/Metadata";
import Footer from "../dashboard/Footer";
import Header from "../dashboard/Header";
import SideNav from "../dashboard/SideNav";
import EditIcon from "@material-ui/icons/Edit";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Loading from "../../More/Loader";
import {
  clearErrors,
  deleteAppointment,
  getAllAppointments,
} from "../../../Redux/actions/AppointmentActions";
import { DELETE_APPOINTMENT_RESET } from "../../../Redux/constants/AppointmentConstants";

const AllAppointmentList = () => {
  const path = useNavigate();
  const dispatch = useDispatch();

  const { error, appointments, loading } = useSelector(
    (state) => state.allAppointments
  );

  const { message, isDeleted } = useSelector((state) => state.appointment);

  const deleteAppointmentHandler = (id) => {
    dispatch(deleteAppointment(id));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Appointment Removed Successfully");
      path("/admin/appointments");
      dispatch({ type: DELETE_APPOINTMENT_RESET });
    }
    dispatch(getAllAppointments());
  }, [dispatch, toast, error, path]);

  const columns = [
    { field: "id", headerName: "ID", minWidth: 50, flex: 0.5 },

    {
      field: "name",
      headerName: "Appointment Name",
      minWidth: 50,
      flex: 1,
    },
    {
      field: "message",
      headerName: "Message",
      minWidth: 50,
      flex: 0.8,
    },
    {
      field: "phone",
      headerName: "Phone",
      minWidth: 50,
      flex: 0.8,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 50,
      flex: 0.8,
    },
    {
      field: "service",
      headerName: "Service Name",
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
            <Link to={`/edit/appointment/${params.getValue(params.id, "id")}`}>
              <RemoveRedEyeIcon />
            </Link>
            <Button
              onClick={() =>
                deleteAppointmentHandler(params.getValue(params.id, "id"))
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

  appointments &&
    appointments.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        message: item.message,
        phone: item.phone,
        email: item.email,
        service: item.service,
      });
    });
  return (
    <>
      <MetaData title={`ALL Appointments | RMAutomotive`} />
      <Header />
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Appointments</h1>
              </div>
              {/* /.col */}

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <i className="nav-icon fa fa-tachometer-alt text-aqua" />
                    <a href="#"> Home </a>
                  </li>

                  <li className="breadcrumb-item active">Appointments</li>
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
            <div className="card card-info">
              <div className="card-header">
                <h3 className="card-title">List Of Appointments</h3>
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
                    className="bannerListTable"
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

export default AllAppointmentList;
