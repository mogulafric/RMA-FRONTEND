import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getServiceDetails,
  updateService,
} from "../../../Redux/actions/ServiceActions";
import { clearErrors } from "../../../Redux/actions/UserActions";
import { UPDATE_SERVICE_RESET } from "../../../Redux/constants/ServiceConstants";
import MetaData from "../../More/Metadata";
import Footer from "../dashboard/Footer";
import Header from "../dashboard/Header";
import SideNav from "../dashboard/SideNav";

const UpdateService = () => {
  const path = useNavigate();
  const dispatch = useDispatch();

  const { error, service } = useSelector((state) => state.serviceDetails);

  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.deleteService);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const { id: serviceId } = useParams();

  useEffect(() => {
    if (service && service._id !== serviceId) {
      dispatch(getServiceDetails(serviceId));
    } else {
      setName(service.name);
      setDescription(service.description);
      setPrice(service.price);
      setOldImages(service.images);
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Service Updated Successfully");
      path("/admin/services");
      dispatch({ type: UPDATE_SERVICE_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    path,
    isUpdated,
    serviceId,
    service,
    updateError,
  ]);

  const updateServiceSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("description", description);
    myForm.set("price", price);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateService(serviceId, myForm));
  };

  const updateServiceImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  return (
    <>
      <MetaData title={`Edit Service | RMAutomotive`} />
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

                  <li className="breadcrumb-item active">
                    {" "}
                    <Link to="/admin/services">Services</Link>
                  </li>
                  <li className="breadcrumb-item active">Edit Service</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>

        <section className="content">
          <form
            onSubmit={updateServiceSubmitHandler}
            encType="multipart/form-data"
          >
            <div className="container-fluid">
              <div className="card card-info">
                <div className="card-header">
                  <h3 className="card-title">Edit Service</h3>
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
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Service Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter service name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="description"
                          placeholder="Enter description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="price"
                          placeholder="Enter price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div id="createServiceFormImage">
                          {imagesPreview.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt="Service Preview"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="file"
                          name="avatar"
                          accept="image/*"
                          onChange={updateServiceImagesChange}
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
                    {loading ? "Updating Service..." : "Update Service"}
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

export default UpdateService;
