import { CREATE_MESSAGE, GET_ERROR } from "./Type";

//! Create messages
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg,
  };
};

//!Return Error
export const returnError = (msg, status) => {
  return { type: GET_ERROR, payload: { msg, status } };
};
