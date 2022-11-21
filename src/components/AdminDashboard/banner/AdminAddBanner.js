import axios from "axios";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  clearErrors,
  createBanner,
} from "../../../Redux/actions/BannerActions";
import { NEW_BANNER_RESET } from "../../../Redux/constants/BannerConstants";
import Footer from "../dashboard/Footer";
import Header from "../dashboard/Header";
import SideNav from "../dashboard/SideNav";

const AdminAddBanner = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [caption1, setCaption1] = useState("");
  const [caption2, setCaption2] = useState("");
  const [images, setImages] = useState("");
  const [imagesPreview, setImagesPreview] = useState([]);

  const { loading, error, success } = useSelector((state) => state.newBanner);

  const createBannerImagesChange = (e) => {
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
  const createBannerSubmitHandler = (e) => {
    e.preventDefault();

    let myForm = new FormData();
    myForm.set("caption1", caption1);
    myForm.set("caption2", caption2);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    dispatch(createBanner(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Banner Uploaded Successfully");

      dispatch({ type: NEW_BANNER_RESET });

      setCaption1("");
      setCaption2("");
      reset();
      setImagesPreview(null);
    }
  }, [dispatch, toast, error, success]);

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
                <h1 className="m-0">Banners</h1>
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
                    <Link to="/admin/banners">Banners</Link>
                  </li>
                  <li className="breadcrumb-item active">Add Banner</li>
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
            onSubmit={createBannerSubmitHandler}
            encType="multipart/form-data"
          >
            <div className="container-fluid">
              <div className="card card-info">
                <div className="card-header">
                  <h3 className="card-title">Add Banner</h3>
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
                        <label htmlFor="Caption1">Caption 1</label>
                        <input
                          type="text"
                          className="form-control"
                          id="caption1"
                          placeholder="Enter caption 1"
                          value={caption1}
                          onChange={(e) => setCaption1(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="caption2">Caption 2</label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="caption1"
                          placeholder="Enter caption 2"
                          value={caption2}
                          onChange={(e) => setCaption2(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <div id="createServiceFormImage">
                          {imagesPreview?.map((image, index) => (
                            <img key={index} src={image} alt="Banner Preview" />
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
                          ref={ref}
                          name="avatar"
                          accept="image/*"
                          onChange={createBannerImagesChange}
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
                    {loading ? "Uploading Slider..." : "Upload Slider"}
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

export default AdminAddBanner;
