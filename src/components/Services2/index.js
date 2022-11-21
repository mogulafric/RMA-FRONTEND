import React from 'react'
import { Link } from 'react-router-dom'
import simg1 from '../../images/service/2.jpg'
import simg2 from '../../images/service/1.jpg'
import simg3 from '../../images/service/3.jpg'
import simg4 from '../../images/service/4.jpg'
import simg5 from '../../images/service/5.jpg'
import simg6 from '../../images/service/6.jpg'
import './style.css'


const Services2 = (props) => {

    const service2 = [
        {
            sImg: simg1,
            title: 'Engine Repair',
            des:'Subtitle Goes Here',
            link:'/service-details'
        },
        {
            sImg: simg2,
            title: 'Tires Replacement',
            des:'Subtitle Goes Here',
            link:'/service-details'
        },
        {
            sImg: simg3,
            title: 'Transmission',
            des:'Subtitle Goes Here',
            link:'/service-details'
        },
        {
            sImg: simg4,
            title: 'Diagnostic',
            des:'Subtitle Goes Here',
            link:'/service-details'
        },
        {
            sImg: simg5,
            title: 'Batteries',
            des:'Subtitle Goes Here',
            link:'/service-details'
        },
        {
            sImg: simg6,
            title: 'Breaks',
            des:'Subtitle Goes Here',
            link:'/service-details'
        },
        
    ]

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }



    return (

        <div className="hx-service-area ptb-100-70">
            <div className="container">
                <div className="col-12">
                    <div className="hx-site-title">
                        <span>What We Do</span>
                        <h2>Our Services</h2>
                    </div>
                </div>
                <div className="row">
                    {service2.map((service, S2item) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={S2item}>
                            <div className="hx-service-item">
                                <div className="hx-service-single">
                                    <div className="service-img">
                                        <img src={service.sImg} alt=""/>
                                    </div>
                                    <div className="hx-service-content">
                                        <h2><Link onClick={ClickHandler} to={service.link}>{service.title}</Link></h2>
                                        <p>{service.des}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Services2;