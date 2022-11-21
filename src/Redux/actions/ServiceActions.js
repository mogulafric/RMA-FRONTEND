
import axios from "../../axios"
import {
  ADMIN_SERVICE_FAIL,
  ADMIN_SERVICE_REQUEST,
  ADMIN_SERVICE_SUCCESS,
  ALL_REVIEW_FAIL,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  ALL_SERVICE_FAIL,
  ALL_SERVICE_REQUEST,
  ALL_SERVICE_SUCCESS,
  CLEAR_ERRORS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_SERVICE_FAIL,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_SERVICE_FAIL,
  NEW_SERVICE_REQUEST,
  NEW_SERVICE_SUCCESS,
  SERVICE_DETAILS_FAIL,
  SERVICE_DETAILS_REQUEST,
  SERVICE_DETAILS_SUCCESS,
  UPDATE_SERVICE_FAIL,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
} from "../constants/ServiceConstants";

export const getService =
  (keyword = "", currentPage = 1, category) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_SERVICE_REQUEST,
      });

      let link = `/api/v2/services?keyword=${keyword}&page=${currentPage}`;

      if (category) {
        link = `/api/v2/services?keyword=${keyword}&page=${currentPage}&category=${category}`;
      }
      const { data } = await axios.get(link);

      dispatch({
        type: ALL_SERVICE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: ALL_SERVICE_FAIL,
        payload: message,
      });
    }
  };

// Get All Services Details
export const getServiceDetails = (id) => async (dispatch) => {
  console.log("Reached getServiceDetails............................ ");
  try {
    dispatch({ type: SERVICE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/services/${id}`);

    dispatch({
      type: SERVICE_DETAILS_SUCCESS,
      payload: data.service,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: SERVICE_DETAILS_FAIL,
      payload: message,
    });
  }
};

// NEW REVIEW
export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/service/review`,
      reviewData,
      config
    );

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: message,
    });
  }
};

// Create Services --------Admin
export const createService = (serviceData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_SERVICE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/services/create`,
      serviceData,
      config
    );

    dispatch({
      type: NEW_SERVICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: NEW_SERVICE_FAIL,
      payload: message,
    });
  }
};

// Get Admin Services -----Admin
export const getAdminServices = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_SERVICE_REQUEST });

    const { data } = await axios.get("/api/v2/admin/services");

    dispatch({
      type: ADMIN_SERVICE_SUCCESS,
      payload: data.services,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ADMIN_SERVICE_FAIL,
      payload: message,
    });
  }
};

// Delete Service ------Admin
export const deleteService = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SERVICE_REQUEST });

    const { data } = await axios.delete(`/api/v2/services/${id}`);

    dispatch({
      type: DELETE_SERVICE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: DELETE_SERVICE_FAIL,
      payload: message,
    });
  }
};

// Update Service
export const updateService = (id, serviceData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SERVICE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/services/${id}`,
      serviceData,
      config
    );

    dispatch({
      type: UPDATE_SERVICE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: UPDATE_SERVICE_FAIL,
      payload: message,
    });
  }
};

// Get All Reviews of a Service
export const getAllReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_REVIEW_REQUEST });

    const { data } = await axios.get(`/api/v2/reviews?id=${id}`);

    dispatch({
      type: ALL_REVIEW_SUCCESS,
      payload: data.reviews,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ALL_REVIEW_FAIL,
      payload: message,
    });
  }
};

// Delete Review of a Service ------ Admin
export const deleteReviews = (reviewId, serviceId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_REVIEW_REQUEST });

    const { data } = await axios.delete(
      `/api/v2/reviews?id=${reviewId}&serviceId=${serviceId}`
    );

    dispatch({
      type: DELETE_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: DELETE_REVIEW_FAIL,
      payload: message,
    });
  }
};

//   Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
