
import axios from "../../axios"
import {
  ALL_BANNER_FAIL,
  ALL_BANNER_REQUEST,
  ALL_BANNER_SUCCESS,
  BANNER_DETAILS_FAIL,
  BANNER_DETAILS_REQUEST,
  BANNER_DETAILS_SUCCESS,
  CLEAR_ERRORS,
  DELETE_BANNER_FAIL,
  DELETE_BANNER_REQUEST,
  DELETE_BANNER_SUCCESS,
  NEW_BANNER_FAIL,
  NEW_BANNER_REQUEST,
  NEW_BANNER_SUCCESS,
  UPDATE_BANNER_FAIL,
  UPDATE_BANNER_REQUEST,
  UPDATE_BANNER_SUCCESS,
} from "../constants/BannerConstants";

// Create Banners --------Admin
export const createBanner = (bannerData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BANNER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/banner/create`,
      bannerData,
      config
    );

    dispatch({
      type: NEW_BANNER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: NEW_BANNER_FAIL,
      payload: message,
    });
  }
};

export const getBanners = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_BANNER_REQUEST,
    });

    let link = `/api/v2/banners`;

    const { data } = await axios.get(link);

    dispatch({
      type: ALL_BANNER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ALL_BANNER_FAIL,
      payload: message,
    });
  }
};

// Get All Banner Details
export const getBannerDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BANNER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/banners/${id}`);

    dispatch({
      type: BANNER_DETAILS_SUCCESS,
      payload: data.banner,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: BANNER_DETAILS_FAIL,
      payload: message,
    });
  }
};
// Update Banner
export const updateBanner = (id, bannerData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BANNER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/banners/${id}`,
      bannerData,
      config
    );

    dispatch({
      type: UPDATE_BANNER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: UPDATE_BANNER_FAIL,
      payload: message,
    });
  }
};
// Delete Banner ------Admin
export const deleteBanner = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BANNER_REQUEST });

    const { data } = await axios.delete(`/api/v2/banners/${id}`);

    dispatch({
      type: DELETE_BANNER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: DELETE_BANNER_FAIL,
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
