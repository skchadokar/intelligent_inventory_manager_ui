import { REHYDRATE } from "redux-persist/lib/constants";
import { Types } from "../types";

const initialState = {
    loading: false,
    isLoggedIn: false,
    userData: {},
    forgotLoad: false,
    resetLoad: false,
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {

        case Types.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case Types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
                userData: action.payload,
            }
        case Types.LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
            }
        case Types.USER_LOGOUT:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
            }

        case Types.FORGOT_REQUEST:
            return {
                ...state,
                forgotLoad: true,
            }
        case Types.FORGOT_SUCCESS:
        case Types.FORGOT_ERROR:
            return {
                forgotLoad: false,
            }
        case Types.RESET_REQUEST:
            return {
                ...state,
                resetLoad: true,
            }
        case Types.RESET_SUCCESS:
        case Types.RESET_ERROR:
            return {
                resetLoad: false,
            }

        default:
            return state;
    }
}
