import React, { useState } from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import Footer from "./Footer";
import Home from "./Home";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Home />
      <SideNav />
      <Footer />
    </>
  );
};

export default Dashboard;
