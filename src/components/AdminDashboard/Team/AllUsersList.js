import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { DataGrid } from "@material-ui/data-grid";
import {
  clearErrors,
  deleteUser,
  getAllUsers,
} from "../../../Redux/actions/UserActions";
import { DELETE_USER_RESET } from "../../../Redux/constants/UserContants";
import Footer from "../dashboard/Footer";
import SideNav from "../dashboard/SideNav";
import Loading from "../../More/Loader";
import MetaData from "../../More/Metadata";
import Header from "../dashboard/Header";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";

const AllUsersList = () => {
  const path = useNavigate();
  const dispatch = useDispatch();

  const { error, users, loading } = useSelector((state) => state.allUsers);

  console.log(JSON.stringify(users));
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.profile
  );

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
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
      toast.success("User Removed Successfully");
      path("/admin/users");
      dispatch({ type: DELETE_USER_RESET });
    }
    dispatch(getAllUsers());
  }, [dispatch, toast, error, path, isDeleted, deleteError]);

  const columns = [
    { field: "id", headerName: "ID", minWidth: 50, flex: 0.3 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 50,
      flex: 0.4,
    },
    {
      field: "email",
      headerName: "Email Address",
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
            <Link to={`/edit/user/${params.getValue(params.id, "id")}`}>
              <RemoveRedEyeIcon />
            </Link>

            <Button
              onClick={() =>
                deleteUserHandler(params.getValue(params.id, "id"))
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

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        email: item.email,
      });
    });

  return (
    <>
      <MetaData title={`ALL Users | RM Automotive`} />
      <Header />
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Users</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <i className="nav-icon fa fa-tachometer-alt text-aqua" />
                    <a href="#"> Home </a>
                  </li>

                  <li className="breadcrumb-item active">Users</li>
                  <li className="breadcrumb-item active">All Users</li>
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
                <h3 className="card-title">List Users</h3>
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

export default AllUsersList;
