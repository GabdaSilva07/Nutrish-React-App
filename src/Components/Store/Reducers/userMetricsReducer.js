import ActionButton from "antd/lib/modal/ActionButton";
import { USER_METRICS_LOADED, USER_METRICS_FAIL, USER_MACROS } from "../Actions/Type";

const initialState = {
  loaded: false,
  gender: "",
  age: null,
  height: null,
  weight: null,
  activityLevel: "",
  goal: "",
  approach: "",
  bmi: null,
  calories: null,
  idealWeight: null,
  macros: {
    carbs:"",
    fat:"",
    protein: "",
  },

};

export default function userMetricsReducer(state = initialState, action) {
    switch (action.type) {
        case USER_METRICS_FAIL:
            return state
        case USER_METRICS_LOADED:
            return {
              loaded: true,
              gender: action.payload.gender,
              age: Number.parseInt(action.payload.age),
              height: Number.parseInt(action.payload.height),
              weight: Number.parseInt(action.payload.weight),
              activityLevel: action.payload.activityLevel,
              goal: action.payload.goal,
              approach: action.payload.approach,
            };
          case USER_MACROS:
            return {
              ...state,
              calories: Number.parseInt(action.payload.userCaloriesNeeded),
              macros: {
                carbs: Number.parseInt(action.payload.userMacros.cGram),
                fat: Number.parseInt(action.payload.userMacros.fGram),
                protein: Number.parseInt(action.payload.userMacros.pGram),
              },
            };
        default:
            return state
    }
}
