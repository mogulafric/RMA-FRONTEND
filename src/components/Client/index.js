import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../../images/client/3.png";
import client2 from "../../images/client/2.png";
import client3 from "../../images/client/3.png";
import client4 from "../../images/client/4.png";
import client5 from "../../images/client/5.png";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getService } from "../../Redux/actions/ServiceActions";
import { toast } from "react-toastify";
import Loading from "../More/Loader";

const Client = () => {
  const dispatch = useDispatch();

  var settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { error, services, loading } = useSelector((state) => state.services);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getService());
  }, [dispatch, error]);

  return (
    <div className="hx-client-area">
      <div className="container">
        <div className="hx-client-item">
          <div className="Gift-carousel owl-carousel">
            {loading ? (
              <Loading />
            ) : (
              <>
                <Slider {...settings}>
                  {services &&
                    services?.map((service, index) => (
                      <img
                        src={service.images[0].url}
                        alt="clinet"
                        height={100}
                      />
                    ))}
                </Slider>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
