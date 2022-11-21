import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Services from "../../components/Services";
import TeamSection from "../../components/team";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";

const ServicePage = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"Service"} pagesub={"Service"} />
      <Services sClass={"hx-service-style-2"} />
      <TeamSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ServicePage;
