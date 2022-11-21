import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import PricingPlan from '../../components/PricingPlan'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const PricingPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Pricing'} pagesub={'Pricing'}/> 
            <PricingPlan/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PricingPage;
