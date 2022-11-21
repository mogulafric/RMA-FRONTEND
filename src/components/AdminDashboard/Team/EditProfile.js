import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  clearErrors,
  getUserDetails,
  loadUser,
  updateProfile,
} from "../../../Redux/actions/UserActions";
import { UPDATE_PROFILE_RESET } from "../../../Redux/constants/UserContants";
import Loading from "../../More/Loader";
import MetaData from "../../More/Metadata";
import Footer from "../dashboard/Footer";
import Header from "../dashboard/Header";
import SideNav from "../dashboard/SideNav";

const EditProfile = () => {
  const dispatch = useDispatch();
  const path = useNavigate();

  const { user } = useSelector((state) => state.userDetails);

  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/profile.png");

  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("avatar", avatar);

    dispatch(updateProfile(myForm));
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const { id: userId } = useParams();

  useEffect(() => {
    if (user && user._id !== userId) {
      dispatch(getUserDetails(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user?.avatar?.url);
    }

    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user?.avatar?.url);
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Profile updated successfully");
      dispatch(loadUser());

      //   path("/admin/users");

      dispatch({
        type: UPDATE_PROFILE_RESET,
      });
    }
  }, [dispatch, error, path, isUpdated, user]);
  return (
    <>
      {" "}
      <MetaData title={`Member Profile | RMAutomotive`} />
      <Header />
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Member Profile</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <i className="nav-icon fa fa-tachometer-alt text-aqua" />
                    <Link href="#"> Home </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    {" "}
                    <Link to="/admin/users">Members</Link>
                  </li>
                  <li className="breadcrumb-item active">Edit Member</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        <section className="content">
          <form encType="multipart/form-data" onSubmit={updateProfileSubmit}>
            <div className="container-fluid">
              {/* <div className="card card-info">
                  <div className="card-header">
                    <h3 className="card-title">Edit Member</h3>
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
                    <div className="row">
                      <div className="col-lg-4"></div>
                      <div className="col-lg-4">
                        {" "}
                        <div id="createAvatarFormImage">
                          <img
                            style={{ borderRadius: "50%" }}
                            src={imagesPreview}
                            alt="Avatar Preview"
                            // width="300"
                            // height="150"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4"></div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter  name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="example@exampla.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
  
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="password">Profile Pic</label>
                          <input
                            className="form-control"
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={updateUserImagesChange}
                            single
                          />
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="card-footer">
                    <button
                      type="submit"
                      className="btn btn-info"
                      disabled={loading ? true : false}
                    >
                      {loading ? "Updating User..." : "Update User"}
                    </button>
                  </div>
                </div> */}

              <div className="row">
                {" "}
                <div className="col-md-3 border-right">
                  {" "}
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img className="rounded-circle mt-5" src={avatarPreview} />
                    <span className="font-weight-bold">{name}</span>
                    <span className="text-black-50">{email}</span>
                    <span> </span>
                  </div>{" "}
                </div>{" "}
                <div className="col-md-5 border-right">
                  {" "}
                  <div className="p-3 py-5">
                    {" "}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      {" "}
                      <h4 className="text-right">Profile Settings</h4>{" "}
                    </div>{" "}
                    <div className="row mt-2">
                      {" "}
                      <div className="col-md-12">
                        <label className="labels">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter  name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>{" "}
                    </div>{" "}
                    <div className="row mt-3">
                      {" "}
                      <div className="col-md-12">
                        <label className="labels">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="example@exampla.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>{" "}
                    </div>{" "}
                    <div className="mt-5 text-center">
                      <button
                        type="submit"
                        className="btn btn-info"
                        disabled={loading ? true : false}
                      >
                        {loading ? "Saving Profile..." : "Save Profile"}
                      </button>
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-md-4">
                  {" "}
                  <div className="p-3 py-5">
                    {" "}
                    <div className="d-flex justify-content-between align-items-center experience">
                      <span>Edit Picture</span>
                    </div>
                    <br />{" "}
                    <div className="col-md-12">
                      <label className="labels">Change Profile Pic</label>
                      <input
                        type="file"
                        name="avatar"
                        accept="image/*"
                        onChange={updateProfileDataChange}
                      />
                    </div>{" "}
                    <br />{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </form>
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

export default EditProfile;
