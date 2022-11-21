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
  DELETE_APPOINTMENT_RESET,
  DELETE_APPOINTMENT_SUCCESS,
  NEW_APPOINTMENT_FAIL,
  NEW_APPOINTMENT_REQUEST,
  NEW_APPOINTMENT_RESET,
  NEW_APPOINTMENT_SUCCESS,
  UPDATE_APPOINTMENT_FAIL,
  UPDATE_APPOINTMENT_REQUEST,
  UPDATE_APPOINTMENT_RESET,
  UPDATE_APPOINTMENT_SUCCESS,
} from "../constants/AppointmentConstants";

// New Appoinment ----Admin
export const newAppoinmentReducer = (state = { appointment: {} }, action) => {
  switch (action.type) {
    case NEW_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_APPOINTMENT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        appointment: action.payload.appointment,
      };
    case NEW_APPOINTMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_APPOINTMENT_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
// Update apoointment
export const appointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_APPOINTMENT_REQUEST:
    case DELETE_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      };

    case UPDATE_APPOINTMENT_FAIL:
    case DELETE_APPOINTMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_APPOINTMENT_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case DELETE_APPOINTMENT_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// All appointments ----- Admin
export const allAppointmentsReducer = (
  state = { appointments: [] },
  action
) => {
  switch (action.type) {
    case ALL_APPOINTMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        appointments: action.payload,
      };

    case ALL_APPOINTMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// Appoointment Details
export const appointmentDetailsReducer = (
  state = { appointment: {} },
  action
) => {
  switch (action.type) {
    case APPOINTMENT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case APPOINTMENT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        appointment: action.payload,
      };

    case APPOINTMENT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
