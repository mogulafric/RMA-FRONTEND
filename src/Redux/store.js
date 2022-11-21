import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";

import {
  allAppointmentsReducer,
  appointmentDetailsReducer,
  appointmentReducer,
  newAppoinmentReducer,
} from "./reducers/appointmentReducers";
import {
  deleteReviewReducer,
  deleteServiceReducer,
  newReviewReducer,
  newServiceReducer,
  serviceDetailsReducer,
  serviceReviewsReducer,
  servicesReducer,
} from "./reducers/serviceReducers";
import {
  bannerDetailsReducer,
  bannersReducer,
  deleteBannerReducer,
  newBannerReducer,
} from "./reducers/bannerReducer";
import {
  companyDetailsReducer,
  newCompanyReducer,
  updateCompanyReducer,
} from "./reducers/companyReducer";
import {
  allQuotationsReducer,
  newQuotationReducer,
  quotationDetailsReducer,
  quotationReducer,
} from "./reducers/quotationReducers";

const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  forgotPassword: forgotPasswordReducer,

  appointment: appointmentReducer,
  allAppointments: allAppointmentsReducer,
  appointmentDetails: appointmentDetailsReducer,
  newAppointment: newAppoinmentReducer,

  quotation: quotationReducer,
  allQuotations: allQuotationsReducer,
  quotationDetails: quotationDetailsReducer,
  newQuotation: newQuotationReducer,

  services: servicesReducer,
  serviceDetails: serviceDetailsReducer,
  newReview: newReviewReducer,
  deleteReview: deleteReviewReducer,
  serviceReviews: serviceReviewsReducer,
  createService: newServiceReducer,
  deleteService: deleteServiceReducer,

  newBanner: newBannerReducer,
  banners: bannersReducer,
  bannerDetails: bannerDetailsReducer,
  deleteBanner: deleteBannerReducer,

  newCompany: newCompanyReducer,
  companyDetails: companyDetailsReducer,
  updateCompany: updateCompanyReducer,
});

let initialState = {};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
