import React from 'react'
import sd1 from '../../images/service-details/img-1.jpg'
import sd2 from '../../images/service-details/img-2.jpg'
import sd3 from '../../images/project/img-10.jpg'
import sd4 from '../../images/project/img-11.jpg'
import sd5 from '../../images/project/img-12.jpg'
import SingleSidebar from '../SingleSidebar'
import {Link} from 'react-router-dom'
import './style.css'


const ProjectSingle = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return (
        <div className="hx-service-dt-area hx-section-padding">
            <div className="container">
                <div className="row">
                    <SingleSidebar/>
                    <div className="col-lg-8">
                        <div className="hx-service-dt-right">
                            <div className="hx-service-dt-img">
                                <img src={sd1} alt=""/>
                            </div>
                            <p><span>T</span>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                            <blockquote>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words beautiful a benificial to world etc.
                            </blockquote>
                            <div className="hx-service-dt-s">
                                <img src={sd2} alt=""/>
                                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,</p>
                            </div>
                        </div>

                        <div className="prv-nx">
                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                        </div>
                        <section className="hx-project-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col col-xs-12 sortable-project col-r">
                                        <h2>Related Projects</h2>
                                        <div className="project-container">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6 col-12">
                                                    <div className="grid tp-related-projects">
                                                        <img src={sd3} alt="" className="img img-responsive"/>
                                                        <div className="hx-project-text">
                                                            <h4><Link onClick={ClickHandler} to="/project-details">Car Repair Service</Link></h4>                          
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-12">
                                                    <div className="grid tp-related-projects">
                                                        <img src={sd4} alt="" className="img img-responsive"/>
                                                        <div className="hx-project-text">
                                                            <h4><Link onClick={ClickHandler} to="/project-details">Car Repair Service</Link></h4>                              
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-12">
                                                    <div className="grid tp-related-projects">
                                                    <img src={sd5} alt="" className="img img-responsive"/>
                                                        <div className="hx-project-text">
                                                            <h4><Link onClick={ClickHandler} to="/project-details">Car Repair Service</Link></h4>                              
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSingle;