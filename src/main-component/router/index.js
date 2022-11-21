import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "../HomePage";
import Homepage2 from "../HomePage2";
import Homepage3 from "../HomePage3";
import AboutPage from "../AboutPage";
import ServicePage from "../ServicePage";
import ServiceDetailsPage from "../ServiceDetailsPage";
import ProjectPage from "../ProjectPage";
import ProjectDetailsPage from "../ProjectDetailsPage";
import PricingPage from "../PricingPage";
import TeamPage from "../TeamPage";
import BlogPage from "../BlogPage";
import BlogPageLeft from "../BlogPageLeft";
import BlogPageFullwidth from "../BlogPageFullwidth";
import BlogDetailsPage from "../BlogDetails";
import BlogDetailsFull from "../BlogDetailsFull";
import ErrorPage from "../ErrorPage";
import ContactPage from "../ContactPage";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import ForgotPassword from "../ForgotPassword";
import Dashboard from "../../components/AdminDashboard/dashboard/Dashboard";
import AddService from "../../components/AdminDashboard/services/AddService";
import AdminAddBanner from "../../components/AdminDashboard/banner/AdminAddBanner";
import AdminListBanners from "../../components/AdminDashboard/banner/AdminListBanners";
import UpdateBanner from "../../components/AdminDashboard/banner/UpdateBanner";
import AdminListServices from "../../components/AdminDashboard/services/AdminListServices";
import UpdateService from "../../components/AdminDashboard/services/UpdateService";
import AddCompany from "../../components/AdminDashboard/company/AddCompany";
import AllAppointmentList from "../../components/AdminDashboard/appointments/AllAppointmentList";

import AddMembers from "../../components/AdminDashboard/Team/AddMembers";
import AllUsersList from "../../components/AdminDashboard/Team/AllUsersList";
import UpdateUser from "../../components/AdminDashboard/Team/UpdateUser";
import AllQuotationsList from "../../components/AdminDashboard/quotations/AllQuotationsList";
import ViewQuotationAdmin from "../../components/AdminDashboard/quotations/ViewQuotationAdmin";
import ViewAppointmentAdmin from "../../components/AdminDashboard/appointments/ViewAppointmentAdmin";
import EditProfile from "../../components/AdminDashboard/Team/EditProfile";

const AllRoute = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/home2" element={<Homepage2 />} />
          <Route path="/home3" element={<Homepage3 />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route exact path="/service/:id" element={<ServiceDetailsPage />} />
          {/* <Route path="/service-details" element={<ServiceDetailsPage />} /> */}
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project-details" element={<ProjectDetailsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-list" element={<BlogPageLeft />} />
          <Route path="/blog-fullwidth" element={<BlogPageFullwidth />} />
          <Route path="/blog-single" element={<BlogDetailsPage />} />
          <Route path="/blog-single-fullwidth" element={<BlogDetailsFull />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Admin Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Banners */}
          <Route path="/admin/banner/create" element={<AdminAddBanner />} />
          <Route path="/admin/banners" element={<AdminListBanners />} />
          <Route path="/edit/banner/:id" element={<UpdateBanner />} />
          {/* Services */}
          <Route path="/admin/service/create" element={<AddService />} />
          <Route path="/admin/services" element={<AdminListServices />} />
          <Route path="/edit/service/:id" element={<UpdateService />} />
          {/* company */}
          <Route path="/admin/company/create" element={<AddCompany />} />
          {/* Appointments */}
          <Route path="/admin/appointments" element={<AllAppointmentList />} />
          <Route
            path="/edit/appointment/:id"
            element={<ViewAppointmentAdmin />}
          />
          {/* Users */}
          <Route path="/admin/user/create" element={<AddMembers />} />
          <Route path="/admin/users" element={<AllUsersList />} />
          {/* <Route path="/edit/user/:id" element={<UpdateUser />} /> */}
          <Route path="/edit/user/:id" element={<EditProfile />} />
          {/* Quotations */}
          <Route path="/admin/quotations" element={<AllQuotationsList />} />
          <Route path="/edit/quotation/:id" element={<ViewQuotationAdmin />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoute;
