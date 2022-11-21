import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import BlogDetails from '../../components/BlogDetails'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogDetailsPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogDetails/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsPage;
