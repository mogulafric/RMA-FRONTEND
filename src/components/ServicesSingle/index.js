import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import sd1 from "../../images/service-details/img-1.jpg";
import sd2 from "../../images/service-details/img-2.jpg";
import {
  clearErrors,
  getServiceDetails,
} from "../../Redux/actions/ServiceActions";
import Loading from "../More/Loader";

import MetaData from "../More/Metadata";
import SingleSidebar from "../SingleSidebar";
import "./style.css";

const ServicesSingle = ({ serviceId }) => {
  const dispatch = useDispatch();
  //prevent toast duplicates
  const customId = "custom-id-yes";

  const { service, loading, error } = useSelector(
    (state) => state.serviceDetails
  );

  useEffect(() => {
    if (error) {
      toast.error(error, {
        toastId: customId,
      });
      dispatch(clearErrors());
    }
    dispatch(getServiceDetails(serviceId));
  }, [error, serviceId]);

  // const objService = Object.assign({}, service);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={`${service?.name}`} />
          <div className="hx-service-dt-area hx-section-padding">
            <div className="container">
              <div className="row">
                <SingleSidebar />
                <div className="col-lg-8">
                  <div className="hx-service-dt-right">
                    <div className="hx-service-dt-img">
                      {service.images &&
                        service.images.map((item, i) => (
                          <img
                            src={item.url}
                            key={i}
                            alt="image service"
                            // width={400}
                            // height={285}
                          />
                        ))}
                    </div>
                    <p>
                      {/* <span>T</span>here are many variations of passages of
                      Lorem */}
                      {service?.description}
                    </p>
                    {/* <blockquote>
                      The generated Lorem Ipsum is therefore always free from
                      repetition, injected humour, or non-characteristic words
                      beautiful a benificial to world etc.
                    </blockquote> */}
                    <div className="hx-service-dt-s">
                      {/* if(service)
                      {
                        <>
                          <img
                            src={service?.images[0]?.url}
                            alt="image service"
                            width={400}
                            height={285}
                          />
                        </>
                      } */}

                      {/* <p>
                        It uses a dictionary of over 200 Latin words, combined
                        with a handful of model sentence structures,
                      </p> */}
                    </div>
                  </div>
                  <div className="prv-nx">
                    {/* <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet.{" "}
                    </p> */}
                    {/* <div className="pre-btn">
                      <Link to="/service-details">Previous</Link>
                    </div>
                    <div className="nex-btn">
                      <Link to="/service-details">Next</Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ServicesSingle;
