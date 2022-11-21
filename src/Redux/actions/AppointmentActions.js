
import axios from "../../axios"
import {
  ALL_APPOINTMENTS_FAIL,
  ALL_APPOINTMENTS_REQUEST,
  ALL_APPOINTMENTS_SUCCESS,
  APPOINTMENT_DETAILS_FAIL,
  APPOINTMENT_DETAILS_REQUEST,
  APPOINTMENT_DETAILS_SUCCESS,
  CLEAR_ERRORS,
  DELETE_APPOINTMENT_FAIL,
  DELETE_APPOINTMENT_REQUEST,
  DELETE_APPOINTMENT_SUCCESS,
  NEW_APPOINTMENT_FAIL,
  NEW_APPOINTMENT_REQUEST,
  NEW_APPOINTMENT_SUCCESS,
  UPDATE_APPOINTMENT_FAIL,
  UPDATE_APPOINTMENT_REQUEST,
  UPDATE_APPOINTMENT_SUCCESS,
} from "../constants/AppointmentConstants";

// Get All Appointment Details
export const getAppointmentDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: APPOINTMENT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v2/appointment/${id}`);

    dispatch({
      type: APPOINTMENT_DETAILS_SUCCESS,
      payload: data.appointment,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: APPOINTMENT_DETAILS_FAIL,
      payload: message,
    });
  }
};

// Create Appointment --------Admin
export const createAppointment = (appointmentData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_APPOINTMENT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v2/appointment/create`,
      appointmentData,
      config
    );

    dispatch({
      type: NEW_APPOINTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: NEW_APPOINTMENT_FAIL,
      payload: message,
    });
  }
};

// Get Appointment appointments -----Admin
export const getAllAppointments = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_APPOINTMENTS_REQUEST });

    const { data } = await axios.get("/api/v2/appointments/all");

    dispatch({
      type: ALL_APPOINTMENTS_SUCCESS,
      payload: data.appointments,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ALL_APPOINTMENTS_FAIL,
      payload: message,
    });
  }
};

// Delete Appointment ------Admin
export const deleteAppointment = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_APPOINTMENT_REQUEST });

    const { data } = await axios.delete(`/api/v2/appointment/${id}`);

    dispatch({
      type: DELETE_APPOINTMENT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: DELETE_APPOINTMENT_FAIL,
      payload: message,
    });
  }
};

// Update Appointment
export const updateAppointment = (id, appointmentData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_APPOINTMENT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v2/appointment/${id}`,
      appointmentData,
      config
    );

    dispatch({
      type: UPDATE_APPOINTMENT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: UPDATE_APPOINTMENT_FAIL,
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
