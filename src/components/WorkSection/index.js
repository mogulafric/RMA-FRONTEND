import React from 'react'
import './style.css'
import Wk1 from '../../images/work/img-1.jpg'
import Wk2 from '../../images/work/img-2.jpg'
import Wk3 from '../../images/work/img-3.jpg'
import Wk4 from '../../images/work/img-4.jpg'

const WorkSection = (props) => {

    return(
        <div className="hx-work-area ptb-100-70">
            <div className="container">
                <div className="col-12">
                    <div className="hx-site-title">
                        <span>Work Prossess</span>
                        <h2>How it Work</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="hx-work-single">
                            <div className="hx-work-img">
                                <img src={Wk1} alt="" />
                            </div>
                            <div className="hx-work-content">
                                <ul>
                                    <li><span>1</span></li>
                                    <li><h4>Choose Your Service</h4></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="hx-work-single">
                            <div className="hx-work-content-2">
                                <ul>
                                    <li><span>2</span></li>
                                    <li><h4>Make An Appointment</h4></li>
                                </ul>
                            </div>
                            <div className="hx-work-img">
                                 <img src={Wk2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="hx-work-single">
                            <div className="hx-work-img">
                                 <img src={Wk3} alt="" />
                            </div>
                            <div className="hx-work-content">
                                <ul>
                                    <li><span>3</span></li>
                                    <li><h4>Confrim Your Request</h4></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="hx-work-single">
                            <div className="hx-work-content-2">
                                <ul>
                                    <li><span>4</span></li>
                                    <li><h4>Pick Your Car</h4></li>
                                </ul>
                            </div>
                            <div className="hx-work-img">
                                 <img src={Wk4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkSection;