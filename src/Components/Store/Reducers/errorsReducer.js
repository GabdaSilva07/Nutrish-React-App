import { GET_ERROR } from "../Actions/Type";

const initialState = {
  msg: {},
  status: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERROR:
      return {
        msg: action.payload,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
