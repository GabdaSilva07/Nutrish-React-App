import axios from "axios";
import { GET_USERS, UPDATE_USER, CREATE_USER, GET_ERROR } from "./Type";
import { createMessage, returnError } from "./messages";
import { axiosInstance } from "../axiosInstance";

//! GET USERS

// export const getUsers = () => (dispatch) => {
//   axios
//     .get("http://127.0.0.1:8000/api/")
//     .then((response) =>
//       dispatch({
//         type: GET_USERS,
//         payload: response.data,
//       })
//     )
//     .catch((err) =>
//       dispatch(returnError(err.response.data, err.response.status))
//     );
// };

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
    .post("api/", JSON.stringify(user), {
    })
    .then((response) => {
      dispatch(createMessage({ createUser: "Welcome to Nutrish" })); //continue
      dispatch({
        type: CREATE_USER,
        payload: response.data,
      });
    })
    .catch((err) =>
      dispatch(returnError(err.response.data, err.response.status))
    );
};
