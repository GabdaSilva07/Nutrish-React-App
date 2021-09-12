import { axiosInstance } from "../axiosInstance";
import { returnError, createMessage } from "./messages";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  GET_ERROR,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
} from "./Type";



//!CHECK TOKEN & LOAD USER


export const loadUsers = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  //!GET TOKEN
  const access_token = getState().authReducer.access_token;
  const refresh_token = getState().authReducer.refresh_token;

  if (access_token && refresh_token === true) {
    axiosInstance.defaults.headers["Authorization"] =
      "JWT " + localStorage.getItem("access_token");
  }

  axiosInstance
    .get("api/token/")
    .then((response) => {
      dispatch({
        type: USER_LOADED,
        payload: response.data,
      });
    }).catch((err) => {
      // dispatch(returnError(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

//! LOGIN USERS
export const login = (loginInfo) => (dispatch) => {
  axiosInstance
    .post("api/token/", JSON.stringify(loginInfo))
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      axiosInstance.defaults.headers["Authorization"] =
        "JWT " + localStorage.getItem("access_token");
    }).catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({ type: LOGIN_FAILED });
    });
};

export const logout = () => (dispatch) => {
  axiosInstance
    .post("api/user/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    })
    .then((response) => {
      dispatch({
        type: LOGOUT_SUCCESS,
        payload: response.data,
      });
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      axiosInstance.defaults.headers["Authorization"] = null;
      
    });
};

// export const logout = () => (dispatch, getState) => {
//   dispatch({ type: USER_LOADING });

//   //!GET TOKEN
//   const access_token = getState().auth.access_token;
//   const refresh_token = getState().auth.refresh_token;

//   if (access_token && refresh_token === true) {
//     axiosInstance.defaults.headers["Authorization"] =
//       "JWT " + localStorage.getItem("access_token");
//   }

//   axiosInstance
//     .get("api/token/", axiosInstance.tokenConfig(getState))
//     .then((response) => {
//       dispatch({
//         type: USER_LOADED,
//         payload: response.data,
//       });
//     })
//     .catch((err) => {
//       // dispatch(returnError(err.response.data, err.response.status));
//       dispatch({ type: AUTH_ERROR });
//     });
// };
