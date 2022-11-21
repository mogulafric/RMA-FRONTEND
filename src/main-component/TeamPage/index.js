import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import TeamSection from '../../components/team'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const TeamPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Team'} pagesub={'Team'}/> 
            <TeamSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default TeamPage;
