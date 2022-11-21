import React from 'react'
import blog1 from '../../images/blog/1.jpg'
import blog2 from '../../images/blog/2.jpg'
import blog3 from '../../images/blog/3.jpg'
import blog4 from '../../images/blog/6.jpg'
import {Link} from 'react-router-dom'

import './style.css'

const BlogSection = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

     const Blog = [
        {
            BlogImg:blog1,
            title:'When Is It Time to Replace Your Tires?',
            authorImg:blog4,
            authorName:'Lily Anne',
            date:'Feb 12,2021',
            link:'/blog-single'

        },
        {
            BlogImg:blog2,
            title:'Does the Brand of Gas I Use Actually Matter?',
            authorImg:blog4,
            authorName:'Lily Anne',
            date:'Feb 12,2021',
            link:'/blog-single'

        },
        {
            BlogImg:blog3,
            title:'Why Does My Car Heater Blow Cold Air?',
            authorImg:blog4,
            authorName:'Lily Anne',
            date:'Feb 12,2021',
            link:'/blog-single'

        },
       
    ]

    return(
        <div className="hx-blog-area ptb-100-70">
            <div className="container">
                <div className="col-l2">
                    <div className="hx-site-title-1 text-center">
                        <span>From Our Blog</span>
                        <h2>Latest News</h2>
                    </div>
                </div>
                <div className="row">
                    {Blog.map((blog, bitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={bitem}>
                            <div className="hx-blog-item">
                                <div className="hx-blog-img">
                                    <img src={blog.BlogImg} alt=""/>
                                </div>
                                <div className="hx-blog-content">
                                    <h3><Link onClick={ClickHandler} to={blog.link}>{blog.title}</Link></h3>
                                    <ul className="post-meta">
                                        <li><img src={blog.authorImg} alt=""/></li>
                                        <li>By<Link onClick={ClickHandler} to={blog.link}>{blog.authorName}</Link></li>
                                        <li> {blog.date}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogSection;