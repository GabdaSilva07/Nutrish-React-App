import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  UserReducer,
  errors,
  messages,
});
