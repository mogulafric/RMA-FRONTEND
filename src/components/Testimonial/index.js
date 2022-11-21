import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import test1 from '../../images/testimonial/2.jpg'
import test2 from '../../images/testimonial/2.png'
import test3 from '../../images/testimonial/3.png'

import './style.css'



class Testimonial extends Component {

    
    render() {
        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (

            <div className="hx-testimonial-area">
                <div className="container">
                    <div className="hx-testimonial-active owl-carousel">
                        <Slider {...settings}>
                            <div className="hx-testimonial-wrap">
                                <div className="hx-testimonial-item">
                                    <div className="hx-testimonial-icon">
                                        <i className="fi flaticon-writer"></i>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum.</p>
                                    </div>
                                    <div className="hx-testimonial-img">
                                        <img src={test1} alt=""/>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <h4>Jimmy Alex</h4>
                                        <span>SEO of Northy</span>
                                    </div>
                                </div>
                            </div> 
                            <div className="hx-testimonial-wrap">
                                <div className="hx-testimonial-item">
                                    <div className="hx-testimonial-icon">
                                        <i className="fi flaticon-writer"></i>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum.</p>
                                    </div>
                                    <div className="hx-testimonial-img">
                                         <img src={test2} alt=""/>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <h4>Ken Williamson</h4>
                                        <span>CEO, Deixfes</span>
                                    </div>
                                </div>
                            </div>  
                            <div className="hx-testimonial-wrap">
                                <div className="hx-testimonial-item"> 
                                    <div className="hx-testimonial-icon">
                                        <i className="fi flaticon-writer"></i>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum.</p>
                                    </div>
                                    <div className="hx-testimonial-img">
                                        <img src={test3} alt=""/>
                                    </div>
                                    <div className="hx-testimonial-content">
                                        <h4>David Warner</h4>
                                        <span>CEO, TBR</span>
                                    </div>
                                </div>
                            </div> 
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial;