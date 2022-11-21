import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ServiceProcessImg from "../../images/service/service-process.PNG";
import { clearErrors, getService } from "../../Redux/actions/ServiceActions";
import Loading from "../More/Loader";
import "./style.css";

const Services = (props) => {
  const path = useNavigate();
  const dispatch = useDispatch();

  const { error, services, loading } = useSelector((state) => state.services);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getService());
  }, [dispatch, error, path]);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className={`hx-service-style-1 ptb-100-70 ${props.sClass}`}>
      <div className="container">
        <div className="col-12">
          <div className="hx-site-title-1 text-center">
            <span>What We Do</span>
            <h2>Our Services</h2>
          </div>
        </div>

        <div className="row">
          {loading ? (
            <Loading />
          ) : (
            <>
              {services?.map((service, Sitem) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={Sitem}>
                  <div className="hx-service-wrap">
                    <div className="hx-service-icon">
                      {/* <i className={service.images[0].url}></i> */}
                      <img
                        src={service?.images[0]?.url}
                        className="hx-service-icon"
                      />
                    </div>
                    <div className="hx-service-text">
                      <h2>
                        <Link
                          onClick={ClickHandler}
                          to={`/service/${service._id}`}
                        >
                          {service.name}
                        </Link>
                      </h2>
                      <p>
                        {service.description.length > 200
                          ? `${service.description.substring(
                              0,
                              200
                            )}...Read More`
                          : service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p style={{ fontWeight: "bold" }}>
              Scheduled car service/offsite service
            </p>
            <p>
              Since our humble beginning we have added many automotive services
              that now make us a full, complete auto repair shop. Here’s a quick
              rundown of our capabilities:
            </p>
            <ol className="olStyleImgSchserv">
              <li>
                Routine maintenance services such as oil changes, fluid
                exchanges, tire rotations, and much more.
              </li>
              <li>
                Auto Repairs from simple jobs to complex diagnostics and
                repairs.
              </li>
              <li> Tire installations.</li>
              <li>
                Engine and transmission repairs, rebuilding and replacements.
              </li>
              <li> Complex Electrical diagnostics and repairs.</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p style={{ fontWeight: "bold" }}>
              Automotive Service Capabilities
            </p>

            <ol className="olStyleImgMerc">
              <li>
                We are a well-organized automotive shop with 6 service bays to
                provide faster service.
              </li>
              <li>
                We perform all mechanical and electrical services for German
                Manufactured vehicles.
              </li>
              <li> We service German Diesel engines.</li>
              <li>
                We specialize in highly technical service challenges and
                drivability problems.
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center" style={{ fontWeight: "bold" }}>
              Service Process
            </p>
            <p className="text-center">
              <img src={ServiceProcessImg} alt="service process" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
