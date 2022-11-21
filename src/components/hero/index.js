import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroContactFrom from "../HeroContactFrom";

import "./style.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../../Redux/actions/BannerActions";
import Loading from "../More/Loader";

const Hero = (props) => {
  const path = useNavigate();
  const dispatch = useDispatch();

  var settings = {
    dots: true,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { error, banners, loading } = useSelector((state) => state.banners);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getBanners());
  }, [dispatch, error, path]);

  return (
    <section
      className={`hero hero-slider-wrapper hx-hero-style-1 ${props.heroClass}`}
    >
      <div className="hero-slider">
        {loading ? (
          <Loading />
        ) : (
          <Slider {...settings}>
            {banners &&
              banners?.map((banner, index) => (
                <div className="slide" key={index}>
                  <div
                    className="slide-inner"
                    style={{
                      backgroundImage: `url(${banner.images[0].url})`,
                    }}
                  >
                    <div className="container header-p">
                      <div className="row">
                        <div className="col col-lg-6 hx-slide-caption">
                          <h2>{banner.caption1}</h2>
                          <p>{banner.caption2}</p>
                          <div className="btn-style">
                            <Link onClick={ClickHandler} to="/about">
                              More About
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <HeroContactFrom />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Hero;
