import React from 'react'
import abimg from '../../images/about/img-1.png'
import { Link } from "react-router-dom";


const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="about-style">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-12 col-m">
                        <div className="hx-about-img">
                            <img src={abimg} alt=""/> 
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="hx-about-content">
                            <div className="hx-site-title">
                                <span>About Our Company</span>
                                <h2>How We Can Help you</h2>
                            </div>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                            <p>There isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary you need to be sure</p>
                            <div className="btns">
                                <div className="btn-style"><Link onClick={ClickHandler} to="/about">More About us</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;