import React, { useRef } from "react";
import { useState } from "react";
import Header from "../dashboard/Header";
import { useDispatch, useSelector } from "react-redux";
import SideNav from "../dashboard/SideNav";
import Footer from "../dashboard/Footer";
import { useNavigate } from "react-router-dom";
import { NEW_SERVICE_RESET } from "../../../Redux/constants/ServiceConstants";
import { useEffect } from "react";
import {
  clearErrors,
  createService,
} from "../../../Redux/actions/ServiceActions";
import { ToastContainer, toast } from "react-toastify";

function AddService() {
  const ref = useRef();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [imagesPreview, setImagesPreview] = useState([]);

  const dispatch = useDispatch();
  const path = useNavigate();

  const { loading, error, success } = useSelector(
    (state) => state.createService
  );

  const categories = ["Others"];

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Service Created Successfully");

      dispatch({ type: NEW_SERVICE_RESET });
      setName("");
      setDescription("");
      setPrice(0);
      setCategory("");
      setImages([]);
      reset();
      setImagesPreview(null);
    }
    setLoading1(false);
  }, [dispatch, toast, path, error, success]);

  const createServiceSubmitHandler = (e) => {
    e.preventDefault();
    setLoading1(true);

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    dispatch(createService(myForm));
  };

  const createServiceImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files?.forEach((file) => {
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

  const reset = () => {
    ref.current.value = "";
  };

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
                  <li className="breadcrumb-item active">Add Service</li>
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
            onSubmit={createServiceSubmitHandler}
            encType="multipart/form-data"
          >
            <div className="container-fluid">
              <div className="card card-info">
                <div className="card-header">
                  <h3 className="card-title">Add Service</h3>
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
                          required
                          className="form-control"
                          id="name"
                          placeholder="Enter service name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                          type="text"
                          required
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
                        <label htmlFor="category">Category</label>
                        <select
                          onChange={(e) => setCategory(e.target.value)}
                          className="form-control"
                        >
                          <option value="">Choose Category</option>
                          {categories.map((cate) => (
                            <option key={cate} value={cate}>
                              {cate}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                          type="price"
                          className="form-control"
                          id="price"
                          placeholder="Enter price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="file"
                          ref={ref}
                          name="avatar"
                          accept="image/*"
                          onChange={createServiceImagesChange}
                          multiple
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div id="createProductFormImage">
                          {imagesPreview?.map((image, index) => (
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
                </div>
                <div className="card-footer">
                  <button
                    type="submit"
                    className="btn btn-info"
                    disabled={loading ? true : false}
                  >
                    {loading1 ? "Submitting..." : "Submit"}
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
}

export default AddService;
