import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../../Redux/actions/UserActions";
import Footer from "../dashboard/Footer";
import Header from "../dashboard/Header";
import SideNav from "../dashboard/SideNav";

const AddMembers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState("/profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/profile.png");

  //User registration
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "12345678",
  });

  const { name, email, password } = user;

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);

    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  const customId = "custom-id-yes";
  useEffect(() => {
    if (error) {
      toast.error(error, { toastId: customId });
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      toast.success("Member Added Successfully");

      // navigate("/dashboard");
    }
  }, [dispatch, error, isAuthenticated, navigate]);
  return (
    <>
      <Header />
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Members</h1>
              </div>
              {/* /.col */}

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <i className="nav-icon fa fa-tachometer-alt text-aqua" />
                    <a href="#"> Home </a>
                  </li>

                  <li className="breadcrumb-item active">Members</li>
                  <li className="breadcrumb-item active">Add Member</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>

        <section className="content">
          <form encType="multipart/form-data" onSubmit={registerSubmit}>
            <div className="container-fluid">
              <div className="card card-info">
                <div className="card-header">
                  <h3 className="card-title">Add Member</h3>
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
                      <img
                        alt="Avatar Preview"
                        src={avatarPreview}
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <div className="col-lg-4"></div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="price">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Full name"
                          value={name}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={email}
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="********"
                          value={password}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="avatar">Profile Pic</label>
                        <input
                          type="file"
                          name="avatar"
                          accept="image/*"
                          className="form-control"
                          id="avatar"
                          placeholder="Choose pic"
                          onChange={registerDataChange}
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
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
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

export default AddMembers;
