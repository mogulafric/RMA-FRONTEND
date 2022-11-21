import React, { Component } from 'react';
import Gallery_1 from '../../images/project/img-1.jpg';
import Gallery_2 from '../../images/project/img-2.jpg';
import Gallery_3 from '../../images/project/img-3.jpg';
import Gallery_4 from '../../images/project/img-4.jpg';
import Gallery_5 from '../../images/project/img-5.jpg';
import Gallery_6 from '../../images/project/img-6.jpg';
import Gallery_7 from '../../images/project/img-7.jpg';
import Gallery_8 from '../../images/project/img-8.jpg';
import Gallery_9 from '../../images/project/img-9.jpg';
import {Link} from 'react-router-dom'
import './style.css'

class Project extends Component {

    state = {
        Break: false,
        Tire: false,
        Engine: false,
        Transmission: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                Tire: true,
                Break: true,
                Transmission: true,
            });
        }

        const webDesign = event => {
            event.preventDefault();
            this.setState({
                Break: true,
                Tire: false,
                onWebApp: false,
                Transmission: false,
                isOpen: true,
            });
        }

        const printDesign = event => {
            event.preventDefault();
            this.setState({
                Tire: true,
                Break: false,
                onWebApp: false,
                Transmission: false,
                isOpen: true,
            });
        }

        const webApp = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                Tire: false,
                Break: false,
                Transmission: false,
                isOpen: true,
            });
        }

        const Photography = event => {
            event.preventDefault();
            this.setState({
                Transmission: true,
                onWebApp: false,
                Tire: false,
                Break: false,
                isOpen: true,
            });
        }


        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }



        return (

            <section id="protfolio" className="tp-projects hx-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="projects-menu">
                                <ul>
                                    <li><Link data-filter="*" to="/" className="current" onClick={allElement}>All Project</Link></li>
                                    <li><Link data-filter=".Web-Design" to="/" onClick={webDesign}>Tire Replacement</Link></li>
                                    <li><Link data-filter=".Print-Design" to="/" onClick={printDesign}>Break Repair</Link></li>
                                    <li><Link data-filter=".Web-Application" to="/" onClick={webApp}>Engine</Link></li>               
                                    <li><Link data-filter=".Photography" to="/" onClick={Photography}>Transmission</Link></li> 
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">
                               
                                <div className={this.state.Tire ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"
                                    }>
                                    <div className="project-inner">
                                        <img src={Gallery_1} className="img img-responsive" alt="" />
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-details">Car Repair Service</Link></h3>
                                                <p className="cat">High Quality</p>
                                            </div>
                                        </div>
                                    </div>      
                                </div>
                                <div className={this.state.Break ? "grid active" : "grid" 
                                    && this.state.Tire ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.Transmission ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_2} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-details">Car Repair Service</Link></h3>
                                                <p className="cat">High Quality</p>
                                            </div>
                                        </div>
                                    </div> 
                                        
                                </div>
                                <div className={this.state.Engine ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_6} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-details">Car Repair Service</Link></h3>
                                                <p className="cat">High Quality</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Tire ? "grid active" : "grid"
                                    && this.state.Transmission ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_5} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-details">Car Repair Service</Link></h3>
                                                <p className="cat">High Quality</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Tire ? "grid active" : "grid"
                                    && this.state.Transmission ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_3} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-details">Car Repair Service</Link></h3>
                                                <p className="cat">High Quality</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Tire ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.Transmission ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_4} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-details">Car Repair Service</Link></h3>
                                                <p className="cat">High Quality</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Tire ? "grid active" : "grid"
                                    && this.state.Transmission ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_7} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-details">Car Repair Service</Link></h3>
                                                <p className="cat">High Quality</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Break ? "grid active" : "grid"
                                    && this.state.Transmission ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_8} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-details">Car Repair Service</Link></h3>
                                                <p className="cat">High Quality</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Break ? "grid active" : "grid"
                                    && this.state.Transmission ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src={Gallery_9} alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} to="/project-details">Car Repair Service</Link></h3>
                                                <p className="cat">High Quality</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project;