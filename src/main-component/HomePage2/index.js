import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import Features from '../../components/Features'
import About2 from '../../components/about2'
import Services2 from '../../components/Services2'
import CounterSection from '../../components/counter'
import WorkSection from '../../components/WorkSection'
import Testimonial from '../../components/Testimonial'
import ContactSection from '../../components/ContactSection'
import BlogSection from '../../components/BlogSection'
import Client from '../../components/Client'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const HomePage2 =() => {
    return(
        <Fragment>
            <Navbar hClass={'hx-header-style-2'}/>
            <Hero heroClass={'hx-hero-style-2'}/>
            <Features/>
            <About2/>
            <Services2/>
            <CounterSection/>
            <WorkSection/>
            <Testimonial/>
            <ContactSection/>
            <BlogSection/>
            <Client/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;