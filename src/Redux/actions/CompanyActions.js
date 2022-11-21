import axios from "../../axios"
import {
  CLEAR_ERRORS,
  COMPANY_DETAILS_FAIL,
  COMPANY_DETAILS_REQUEST,
  COMPANY_DETAILS_SUCCESS,
  DELETE_COMPANY_REQUEST,
  DELETE_COMPANY_SUCCESS,
  EDIT_COMPANY_FAIL,
  EDIT_COMPANY_REQUEST,
  EDIT_COMPANY_SUCCESS,
  REGISTER_COMPANY_FAIL,
  REGISTER_COMPANY_REQUEST,
  REGISTER_COMPANY_SUCCESS,
  UPDATE_COMPANY_FAIL,
  UPDATE_COMPANY_REQUEST,
  UPDATE_COMPANY_SUCCESS,
} from "../constants/CompanyConstants";

export const listBusiness = () => async (dispatch) => {
  try {
    dispatch({ type: COMPANY_DETAILS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.get(`/api/v2/company/`, config);

    dispatch({ type: COMPANY_DETAILS_SUCCESS, payload: data.company });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: COMPANY_DETAILS_FAIL,
      payload: message,
    });
  }
};

// DELETE BUSINESS
export const deleteBusiness = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_COMPANY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    await axios.delete(`/api/v2/company/${id}`, config);

    dispatch({ type: DELETE_COMPANY_SUCCESS });

    dispatch(listBusiness());
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: BUSINESS_DELETE_FAIL,
      payload: message,
    });
  }
};

// CREATE BUSINESS
export const createCompany = (companyData) => async (dispatch, getState) => {
  try {
    dispatch({ type: REGISTER_COMPANY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/company/create`,
      companyData,
      config
    );

    dispatch({ type: REGISTER_COMPANY_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.response);
    console.log(error.response.data.message);
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message);

    dispatch({
      type: REGISTER_COMPANY_FAIL,
      payload: message,
    });
  }
};

// EDIT Company
export const editCompany = () => async (dispatch) => {
  try {
    dispatch({ type: EDIT_COMPANY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.get(`/api/v2/company/`, config);

    dispatch({ type: EDIT_COMPANY_SUCCESS, payload: data.data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: EDIT_COMPANY_FAIL,
      payload: message,
    });
  }
};

// UPDATE Company
export const updateCompany = (company) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_COMPANY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/company/${company._id}`,
      company,
      config
    );

    dispatch({ type: UPDATE_COMPANY_SUCCESS, payload: data });

    dispatch({ type: EDIT_COMPANY_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: UPDATE_COMPANY_FAIL,
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
