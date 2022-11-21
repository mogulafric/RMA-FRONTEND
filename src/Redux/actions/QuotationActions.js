import axios from "../../axios";
import {
  ALL_QUOTATIONS_FAIL,
  ALL_QUOTATIONS_REQUEST,
  ALL_QUOTATIONS_SUCCESS,
  CLEAR_ERRORS,
  DELETE_QUOTATION_FAIL,
  DELETE_QUOTATION_REQUEST,
  DELETE_QUOTATION_SUCCESS,
  NEW_QUOTATION_FAIL,
  NEW_QUOTATION_REQUEST,
  NEW_QUOTATION_SUCCESS,
  QUOTATION_DETAILS_FAIL,
  QUOTATION_DETAILS_REQUEST,
  QUOTATION_DETAILS_SUCCESS,
  UPDATE_QUOTATION_FAIL,
  UPDATE_QUOTATION_REQUEST,
  UPDATE_QUOTATION_SUCCESS,
} from "../constants/QuotationConstants";

// Get All Quotation Details
export const getQuotationDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: QUOTATION_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/quotation/${id}`);

    dispatch({
      type: QUOTATION_DETAILS_SUCCESS,
      payload: data.quotation,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: QUOTATION_DETAILS_FAIL,
      payload: message,
    });
  }
};

// Create QUOTATION --------Admin
export const createQuotation = (quotationData) => async (dispatch) => {
  alert("OK");
  try {
    dispatch({ type: NEW_QUOTATION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/quotation/create`,
      quotationData,
      config
    );

    dispatch({
      type: NEW_QUOTATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: NEW_QUOTATION_FAIL,
      payload: message,
    });
  }
};

// Get quotations -----Admin
export const getAllQuotations = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_QUOTATIONS_REQUEST });

    const { data } = await axios.get("/api/v2/quotations/all");

    dispatch({
      type: ALL_QUOTATIONS_SUCCESS,
      payload: data.quotations,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ALL_QUOTATIONS_FAIL,
      payload: message,
    });
  }
};

// Delete Quotation ------Admin
export const deleteQuotation = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_QUOTATION_REQUEST });

    const { data } = await axios.delete(`/api/v2/quotation/${id}`);

    dispatch({
      type: DELETE_QUOTATION_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: DELETE_QUOTATION_FAIL,
      payload: message,
    });
  }
};

// Update QUOTATION
export const updateQuotation = (id, quotationData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_QUOTATION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/quotation/${id}`,
      quotationData,
      config
    );

    dispatch({
      type: UPDATE_QUOTATION_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: UPDATE_QUOTATION_FAIL,
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
