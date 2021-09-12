import { USER_METRICS_LOADED, USER_MACROS } from "./Type";


export const getUserMetrics = (userMetrics) => (dispatch) => {
    dispatch({
        type: USER_METRICS_LOADED,
        payload: userMetrics,
    })
}

export const getUserMacros = (userMacros) => (dispatch) => {
    dispatch({
        type: USER_MACROS,
        payload: userMacros
    })
}