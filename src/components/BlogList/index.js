import React from 'react';
import {Link} from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'
import VideoModal from '../../components/ModalVideo'

import blog1 from '../../images/blog/img-7.jpg'
import blog2 from '../../images/blog/img-8.jpg'
import blog3 from '../../images/blog/img-9.jpg'
import blog4 from '../../images/blog/img-10.jpg'
import blog5 from '../../images/blog/author.jpg'

import './style.css'

const BlogList = () => {

    return(

        <section className="hx-blog-pg-section hx-section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="hx-blog-posts clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog1} alt="" />
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={blog5} alt="" />
                                            &nbsp; By <Link to="/blog-single">Lily Anne</Link>
                                        </li>
                                        <li>January 12,2021</li>
                                    </ul>
                                    <h3><Link to="/blog-single">When Is It Time to Replace Your Tires?</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable. If you are going to use a passage of
                                        Lorem Ipsum, you need to be sure there isn't </p>
                                    <Link to="/blog-single" className="read-more">Read More..</Link>
                                </div>
                            </div>
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog2} alt="" />
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={blog5} alt="" />
                                            &nbsp; By <Link to="/blog-single">Lily Anne</Link>
                                        </li>
                                        <li>January 12,2021</li>
                                    </ul>
                                    <h3><Link to="/blog-single">Why Does My Car Heater Blow Cold Air?</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable. If you are going to use a passage of
                                        Lorem Ipsum, you need to be sure there isn't </p>
                                    <Link to="/blog-single" className="read-more">Read More..</Link>
                                </div>
                            </div>
                            <div className="post format-video">
                                <div className="entry-media video-holder">
                                    <img src={blog3} alt="" />
                                    <VideoModal/>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={blog5} alt="" />
                                            &nbsp; By <Link to="/blog-single">Lily Anne</Link>
                                        </li>
                                        <li>January 12,2021</li>
                                    </ul>
                                    <h3><Link to="/blog-single">Does the Brand of Gas I Use Actually Matter?</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable. If you are going to use a passage of
                                        Lorem Ipsum, you need to be sure there isn't </p>
                                    <Link to="/blog-single" className="read-more">Read More..</Link>
                                </div>
                            </div>
                            <div className="post format-quote">
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={blog5} alt="" />
                                            &nbsp; By <Link to="/blog-single">Lily Anne</Link>
                                        </li>
                                        <li>January 12,2021</li>
                                    </ul>
                                    <h3><Link to="/blog-single">Important tips for your favirite car</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable. If you are going to use a passage of
                                        Lorem Ipsum, you need to be sure there isn't </p>
                                    <Link to="/blog-single" className="read-more">Read More..</Link>
                                </div>
                            </div>
                            <div className="post">
                                <div className="entry-media">
                                    <img src={blog4} alt="" />
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={blog5} alt="" />
                                            &nbsp; By <Link to="/blog-single">Lily Anne</Link>
                                        </li>
                                        <li>January 12,2021</li>
                                    </ul>
                                    <h3><Link to="/blog-single">Important tips for your favirite car</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable. If you are going to use a passage of
                                        Lorem Ipsum, you need to be sure there isn't </p>
                                    <Link to="/blog-single" className="read-more">Read More..</Link>
                                </div>
                            </div>
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link to="/blog-single" aria-label="Previous">
                                            <i className="ti-arrow-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link to="/blog-single">1</Link></li>
                                    <li><Link to="/blog-single">2</Link></li>
                                    <li><Link to="/blog-single">3</Link></li>
                                    <li>
                                        <Link to="/blog-single" aria-label="Next">
                                            <i className="ti-arrow-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar/>
                </div>
            </div>
        </section>

     )
        
}

export default BlogList;
