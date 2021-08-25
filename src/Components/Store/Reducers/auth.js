import { axiosInstance } from "../Actions/users";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../Actions/Type";

const initialState = {
  access_token: localStorage.getItem("access_token"),
  refresh_token: localStorage.getItem("refresh_token"),
  isAuthenticated: null,
  isLoading: false,
  axiosHeader: null,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      return {
        ...state,
        user: null,
        access_token: null,
        refresh_token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case LOGIN_FAILED:
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      return {
        ...state,
        user: null,
        access_token: null,
        refresh_token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
