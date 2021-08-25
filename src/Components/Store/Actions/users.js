import axios from "axios";
import {
  GET_USERS,
  UPDATE_USER,
  CREATE_USER,
  GET_ERROR,
  CREATE_MESSAGE,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "./Type";
import { createMessage } from "../Actions/messages";
import { useHistory } from "react-router-dom";
import { returnError } from "../Actions/messages";

const baseURL = "http://127.0.0.1:8000/";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});



// export const login = (userLoginInfo) =>{
//   axiosInstance.post("api/token/", JSON.stringify(userLoginInfo))
//   .then((response) =>{
//     localStorage.setItem("access_token", response.data.access);
//     localStorage.setItem("refresh_token", response.data.refresh);
//     axiosInstance.defaults.headers["Authorization"] = "JWT " + localStorage.getItem("access_token")
//     this.props.history.push("/");})

// }

//! GET USERS

export const getUsers = () => (dispatch) => {
  axiosInstance
    .get("api/")
    .then((response) => {
      console.log(response.data);
    })
    .then((response) =>
      dispatch({
        type: GET_USERS,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};

//! UPDATE USER

export const updateUser = (id) => (dispatch) => {
  axios
    .put(`http://127.0.0.1:8000/api/users/${id}`)
    .then((response) =>
      dispatch({
        type: UPDATE_USER,
        payload: id,
      })
    )
    .catch((err) => console.log(err));
};

//! CREATE_USER

export const createUser = (user) => (dispatch) => {
  axiosInstance
    .post("api/user/register/", JSON.stringify(user))
    .then((response) => {
      dispatch(createMessage({ createUser: "Welcome to Nutrish" })); //continue
      dispatch({
        type: CREATE_USER,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch(returnError(err.response.data, err.response.status));
      dispatch({ type: LOGIN_FAILED });
    });
};
