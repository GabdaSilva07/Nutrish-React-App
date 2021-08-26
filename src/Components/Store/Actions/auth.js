import { axiosInstance } from "../Actions/users";
import { returnError, createMessage } from "./messages";
import { LOGIN_FAILED, LOGIN_SUCCESS, GET_ERROR } from "./Type";

import { USER_LOADED, USER_LOADING, AUTH_ERROR } from "./Type";

//!CHECK TOKEN & LOAD USER
export const loadUsers = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  //!GET TOKEN
  const access_token = getState().auth.access_token;
  const refresh_token = getState().auth.refresh_token;

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
    })
    .catch((err) => {
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
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({ type: LOGIN_FAILED });
    });
};
