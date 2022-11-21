import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s1 from "../../images/service-details/img-3.jpg";
import { listBusiness } from "../../Redux/actions/CompanyActions";
import { getService } from "../../Redux/actions/ServiceActions";
import Loading from "../More/Loader";

const SingleSidebar = () => {
  const dispatch = useDispatch();

  const { error, company, loading } = useSelector(
    (state) => state.companyDetails
  );

  const {
    error: errorService,
    services,
    loading: loadingService,
  } = useSelector((state) => state.services);

  useEffect(() => {
    if (errorService) {
      toast.error(errorService);
      dispatch(clearErrors());
    }
    dispatch(getService());
  }, [dispatch, errorService]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch(listBusiness());
  }, [dispatch, error]);

  const objCompany = Object.assign({}, company);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="col-lg-4 col-md-12 col-12">
      <div className="hx-service-dt-left">
        <div className="widget category-widget">
          <h3>Categories</h3>
          <ul>
            {loadingService ? (
              <Loading />
            ) : (
              <>
                {services?.map((service, Sitem) => (
                  <li>
                    <Link onClick={ClickHandler} to={`/service/${service._id}`}>
                      {service?.name}
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
        {/* <div className="hx-field-section">
          <div className="hx-field-img">
            <img src={s1} alt="" />
          </div>
          <div className="hx-field-content">
            <h3>
              Get<span>25%</span>Off
            </h3>
            <h2>ALL ORDER</h2>
          </div>
        </div> */}
        <div className="hx-contact-ad">
          <div className="hx-contact-sub">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <h4>Phone</h4>
            <p>{(objCompany[0]?.phone, objCompany[0]?.mobile)}</p>
          </div>
          <div className="hx-contact-sub">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <h4>Email</h4>
            <p>
              <a href={`mailto:${objCompany[0]?.email}`}>
                {objCompany[0]?.email}
              </a>
            </p>
            <p></p>
          </div>
          <div className="hx-contact-sub hx-contact-sub-2">
            <i className="fa fa-map-o" aria-hidden="true"></i>
            <h4>Address</h4>
            <p> {objCompany[0]?.address + " " + objCompany[0]?.city}</p>
            <p>{objCompany[0]?.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSidebar;
