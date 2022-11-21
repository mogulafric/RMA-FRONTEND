import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import BlogSection2 from '../../components/BlogSection2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogSection2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPage;

