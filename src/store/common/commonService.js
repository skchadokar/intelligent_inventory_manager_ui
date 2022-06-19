import axios from "axios";
import { baseUrl, listDevice } from "../API";
import { Types } from "../types";

export const ClearAlert = () => {
    return (dispatch) => {
        dispatch({ type: Types.ALERT_CLEAR });
    }
};

export const Navigation = (menu) => {
    return (dispatch) => {
        dispatch({ type: Types.NAVIGATION_LABEL, payload: menu });
    }
};
