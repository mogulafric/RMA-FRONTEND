import {
  CLEAR_ERRORS,
  COMPANY_DETAILS_FAIL,
  COMPANY_DETAILS_REQUEST,
  COMPANY_DETAILS_SUCCESS,
  DELETE_COMPANY_FAIL,
  DELETE_COMPANY_REQUEST,
  DELETE_COMPANY_RESET,
  DELETE_COMPANY_SUCCESS,
  REGISTER_COMPANY_FAIL,
  REGISTER_COMPANY_REQUEST,
  REGISTER_COMPANY_RESET,
  REGISTER_COMPANY_SUCCESS,
  UPDATE_COMPANY_FAIL,
  UPDATE_COMPANY_REQUEST,
  UPDATE_COMPANY_RESET,
  UPDATE_COMPANY_SUCCESS,
} from "../constants/CompanyConstants";

// New company ----Admin
export const newCompanyReducer = (state = { company: {} }, action) => {
  switch (action.type) {
    case REGISTER_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_COMPANY_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        company: action.payload.appointment,
      };
    case REGISTER_COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REGISTER_COMPANY_RESET:
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
// Update company
export const updateCompanyReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_COMPANY_REQUEST:
    case DELETE_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      };

    case UPDATE_COMPANY_FAIL:
    case DELETE_COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_COMPANY_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case DELETE_COMPANY_RESET:
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

// company Details
export const companyDetailsReducer = (state = { company: {} }, action) => {
  switch (action.type) {
    case COMPANY_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        company: action.payload,
      };

    case COMPANY_DETAILS_FAIL:
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
