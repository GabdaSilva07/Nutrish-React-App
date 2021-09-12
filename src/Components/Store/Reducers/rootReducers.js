import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import errorsReducer from "./errorsReducer";
import messagesReducer from "./messagesReducer";
import authReducer from "./authReducer";
import userMetricsReducer from "./userMetricsReducer";

export default combineReducers({
  UserReducer,
  errorsReducer,
  messagesReducer,
  authReducer,
  userMetricsReducer,
});
