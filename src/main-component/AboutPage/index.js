import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import About from "../../components/about";
import Services from "../../components/Services";
import CounterSection from "../../components/counter";
import TeamSection from "../../components/team";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";

const CasePage = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"About Us"} pagesub={"About"} />
      <About />
      {/* <CounterSection counterClass={"counter-style-2"} /> */}
      <Services sClass={"hx-service-style-2"} />
      <TeamSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CasePage;
