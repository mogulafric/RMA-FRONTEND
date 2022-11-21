import {
  ALL_QUOTATIONS_FAIL,
  ALL_QUOTATIONS_REQUEST,
  ALL_QUOTATIONS_SUCCESS,
  CLEAR_ERRORS,
  DELETE_QUOTATION_FAIL,
  DELETE_QUOTATION_REQUEST,
  DELETE_QUOTATION_RESET,
  DELETE_QUOTATION_SUCCESS,
  NEW_QUOTATION_FAIL,
  NEW_QUOTATION_REQUEST,
  NEW_QUOTATION_RESET,
  NEW_QUOTATION_SUCCESS,
  QUOTATION_DETAILS_FAIL,
  QUOTATION_DETAILS_REQUEST,
  QUOTATION_DETAILS_SUCCESS,
  UPDATE_QUOTATION_FAIL,
  UPDATE_QUOTATION_REQUEST,
  UPDATE_QUOTATION_RESET,
  UPDATE_QUOTATION_SUCCESS,
} from "../constants/QuotationConstants";

// New Quotation ----Admin
export const newQuotationReducer = (state = { quotation: {} }, action) => {
  switch (action.type) {
    case NEW_QUOTATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_QUOTATION_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        quotation: action.payload.quotation,
      };
    case NEW_QUOTATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_QUOTATION_RESET:
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
// Update quotation
export const quotationReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_QUOTATION_REQUEST:
    case DELETE_QUOTATION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_QUOTATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_QUOTATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      };

    case UPDATE_QUOTATION_FAIL:
    case DELETE_QUOTATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_QUOTATION_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case DELETE_QUOTATION_RESET:
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

// All quotation ----- Admin
export const allQuotationsReducer = (state = { quotations: [] }, action) => {
  switch (action.type) {
    case ALL_QUOTATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_QUOTATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        quotations: action.payload,
      };

    case ALL_QUOTATIONS_FAIL:
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

// Quotation Details
export const quotationDetailsReducer = (state = { quotation: {} }, action) => {
  switch (action.type) {
    case QUOTATION_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case QUOTATION_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        quotation: action.payload,
      };

    case QUOTATION_DETAILS_FAIL:
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
