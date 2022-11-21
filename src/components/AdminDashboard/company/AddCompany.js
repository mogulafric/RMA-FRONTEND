import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  clearErrors,
  createCompany,
} from "../../../Redux/actions/CompanyActions";
import {
  REGISTER_COMPANY_RESET,
  UPDATE_COMPANY_REQUEST,
} from "../../../Redux/constants/CompanyConstants";
import Footer from "../dashboard/Footer";
import Header from "../dashboard/Header";
import SideNav from "../dashboard/SideNav";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import axios from "axios";
import htmlToDraft from "html-to-draftjs";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const AddCompany = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const dispatch = useDispatch();
  const path = useNavigate();
  const ref = useRef();
  const [biz, setBusiness] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [mobile, setMobile] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [vatNumber, setVatNumber] = useState("");
  const [pinNumber, setPinNumber] = useState("");
  const [postCode, setPostCode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [website, setWebsite] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [location, setLocation] = useState("");
  const [companyMotto, setCompanyMotto] = useState("");
  const [images, setImages] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [aboutCompany, setAboutCompany] = useState("");

  const { loading, error, success } = useSelector((state) => state.newCompany);

  //Fetch company details
  const fetchBizDetails = async () => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.get(`/api/v2/company/`, config);
    console.log(JSON.stringify(data));

    setBusiness(await data.company);
  };
  const updateCompany = useSelector((state) => state.updateCompany);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    isUpdated,
  } = updateCompany;

  useEffect(() => {
    biz.map((bizz) => {
      if (isUpdated) {
        dispatch({ type: UPDATE_COMPANY_REQUEST });

        toast.success("Company Updated Successfully", ToastObjects);
      } else {
        setCompanyName(bizz.companyName);
        setMobile(bizz.mobile);
        setPhone(bizz.phone);
        setEmail(bizz.email);
        setVatNumber(bizz.vatNumber);
        setPinNumber(bizz.pinNumber);
        setPostCode(bizz.postCode);
        setAddress(bizz.address);
        setCity(bizz.city);
        setCountry(bizz.country);
        setWebsite(bizz.website);
        setOpeningHours(bizz.openingHours);
        setLocation(bizz.location);
        setCompanyMotto(bizz.companyMotto);
        setAboutCompany(bizz.aboutUs);
        // setEditorState(
        //   draftToHtml(convertToRaw(editorState.getCurrentContent()))
        // );
        setImages(bizz?.images[0]?.url);
        reset();
        setImagesPreview(null);
      }
    });
  }, [biz, isUpdated, dispatch]);

  const htmlToDraftBlocks = (html) => {
    const blocksFromHtml = htmlToDraft(html);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    const editorState = EditorState.createWithContent(contentState);
    return editorState;
  };

  // alert(editorState);

  useEffect(() => {
    setEditorState(htmlToDraftBlocks(aboutCompany));
  }, [biz, dispatch]);

  useEffect(() => {
    fetchBizDetails();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Company Created Successfully");
      dispatch({ type: REGISTER_COMPANY_RESET });
      setCompanyName("");
      setMobile("");
      setPhone("");
      setEmail("");
      setVatNumber("");
      setPinNumber("");
      setPostCode("");
      setAddress("");
      setCity("");
      setCountry("");
      setWebsite("");
      setOpeningHours("");
      setLocation("");
      setCompanyMotto("");
      setEditorState("");
      setImages([]);
      reset();
      setImagesPreview(null);
    }
    setLoading1(false);
  }, [dispatch, toast, path, error, success]);

  const createCompanySubmitHandler = (e) => {
    e.preventDefault();
    setLoading1(true);

    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    // setAboutUs(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    const myForm = new FormData();

    myForm.set("companyName", companyName);
    myForm.set("mobile", mobile);
    myForm.set("phone", phone);
    myForm.set("email", email);
    myForm.set("vatNumber", vatNumber);
    myForm.set("pinNumber", pinNumber);
    myForm.set("postCode", postCode);
    myForm.set("address", address);
    myForm.set("city", city);
    myForm.set("country", country);
    myForm.set("website", website);
    myForm.set("openingHours", openingHours);
    myForm.set("location", location);
    myForm.set(
      "aboutUs",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );

    if (document.getElementById("logo").files.length == 0) {
      images.forEach((image) => {
        myForm.append("images", image);
      });
    }

    dispatch(createCompany(myForm));
  };

  const createCompanyImagesChange = (e) => {
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
                <h1 className="m-0">Company</h1>
              </div>
              {/* /.col */}

              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <i className="nav-icon fa fa-tachometer-alt text-aqua" />
                    <a href="#"> Home </a>
                  </li>

                  <li className="breadcrumb-item active">Company</li>
                  <li className="breadcrumb-item active">Add Company</li>
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
            onSubmit={createCompanySubmitHandler}
            encType="multipart/form-data"
          >
            <div className="container-fluid">
              <div className="card card-info">
                <div className="card-header">
                  <h3 className="card-title">Add Company</h3>
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
                      <img src={images} alt="company logo" />
                    </div>
                    <div className="col-lg-4"></div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="companyName"
                          placeholder="Enter company name"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="mobile"
                          placeholder="Enter mobile"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="phone"
                          placeholder="Enter phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="pinNumber">Pin Number</label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="pinNumber"
                          placeholder="Enter pin number"
                          value={pinNumber}
                          onChange={(e) => setPinNumber(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="vatNumber">VAT Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="vatNumber"
                          placeholder="Enter vatNumber"
                          value={vatNumber}
                          onChange={(e) => setVatNumber(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="postCode">Post Code</label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="postCode"
                          placeholder="Enter post code"
                          value={postCode}
                          onChange={(e) => setPostCode(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Postal Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="Enter postal address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="city"
                          placeholder="Enter city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          placeholder="Enter country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="website">Website</label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="website"
                          placeholder="Enter website"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="openingHours">Opening Hours</label>
                        <input
                          type="text"
                          className="form-control"
                          id="openingHours"
                          placeholder="Enter opening hours"
                          value={openingHours}
                          onChange={(e) => setOpeningHours(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Company Logo</label>
                        <input
                          id="logo"
                          className="form-control"
                          type="file"
                          ref={ref}
                          name="avatar"
                          accept="image/*"
                          onChange={createCompanyImagesChange}
                          multiple
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input
                          type="text"
                          className="form-control"
                          id="location"
                          placeholder="Enter location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>
                      {/* <div className="form-group">
                        <div id="createProductFormImage">
                          {imagesPreview?.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt="Service Preview"
                            />
                          ))}
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="companyMotto">Company Motto</label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="companyMotto"
                          placeholder="Enter company motto"
                          value={companyMotto}
                          onChange={(e) => setCompanyMotto(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="location">About Us</label>
                        <Editor
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorState={editorState}
                          editorClassName="editor-class"
                          onEditorStateChange={setEditorState}
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
};

export default AddCompany;
