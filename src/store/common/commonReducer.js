import { Types } from "../types";


const initialState = {
    alert: false,
    message: '',
    type: '',
    duration: 3000,
}


export const alertReducer = (state = initialState, action) => {
    switch (action.type) {

        case Types.ALERT_ERROR:
            return {
                ...state,
                alert: true,
                type: 'error',
                message: action.payload.message ?? 'Failed',
                duration: action.payload.duration ?? state.duration,
            }

        case Types.ALERT_SUCCESS:
            return {
                ...state,
                alert: true,
                type: 'success',
                message: action.payload.message ?? '',
                duration: action.payload.duration ?? state.duration,
            }
        case Types.ALERT_WARNING:
            return {
                ...state,
                alert: true,
                type: 'warning',
                message: action.payload.message ?? '',
                duration: action.payload.duration ?? state.duration,
            }

        case Types.ALERT_INFO:
            return {
                ...state,
                alert: true,
                type: 'info',
                message: action.payload.message ?? '',
                duration: action.payload.duration ?? state.duration,
            }

        case Types.ALERT_DEFAULT:
            return {
                ...state,
                alert: true,
                type: '',
                message: action.payload.message ?? '',
                duration: action.payload.duration ?? state.duration,
            }

        case Types.ALERT_CLEAR:
            return {
                ...state,
                alert: false,
                type: '',
                message: '',
                duration: 3000,
            }

        default:
            return state;
    }
}

export const navigationReducer = (state = { menu: 'dashboard' }, action) => {
    switch (action.type) {

        case Types.NAVIGATION_LABEL:
            return {
                menu: action.payload,
            }

        default:
            return state;
    }
}
