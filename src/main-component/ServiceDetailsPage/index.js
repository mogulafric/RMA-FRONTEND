import React, { Fragment, useEffect } from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import ServicesSingle from "../../components/ServicesSingle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getServiceDetails,
} from "../../Redux/actions/ServiceActions";

const ServiceDetailsPage = () => {
  const { id } = useParams();

  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"Service Single"} pagesub={"Service"} />
      <ServicesSingle serviceId={id} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ServiceDetailsPage;
