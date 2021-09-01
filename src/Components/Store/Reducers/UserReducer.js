import { GET_USERS, UPDATE_USER, CREATE_USER, LOGOUT_USER } from "../Actions/Type.js";

const initialState = {
  email: "",
  user_name: "",
  diet: "",
  intolerance: "",
  favourite1: "",
  favourite2: "",
  favourite3: "",
  users: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        email: action.payload.email,
        user_name: action.payload.user_name,
        diet: action.payload.diet,
        intolerance: action.payload.intolerance,
        favourite1: action.payload.favourite1,
        favourite2: action.payload.favourite2,
        favourite3: action.payload.favourite3,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case LOGOUT_USER:
    return {
      email: "",
      user_name: "",
      diet: "",
      intolerance: "",
      favourite1: "",
      favourite2: "",
      favourite3: "",
      users: [],
    };
    default:
      return state;
  }
}
