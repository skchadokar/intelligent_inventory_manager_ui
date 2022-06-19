import axios from "axios";
import { Roles } from "../../components/utilities/functions";
import { baseUrl } from "../API";
import { Types } from "../types";

export const UserLogin = (data) => {

    console.log("++++++data+++",data)

    return (dispatch) => {
        dispatch({ type: Types.LOGIN_REQUEST });
        // axios.post(baseUrl + '/getToken', data).then(resp => {
        // let cred = {
        //     email: 'admin@gmail.com',
        //     password: 'Admin'
        // }
        axios.post(baseUrl + '/authenticate', data).then(resp => {

            localStorage.setItem('customer.token', resp.data.jwttoken);
            dispatch({ type: Types.LOGIN_SUCCESS, payload: {} });
        // if (data.username === cred.email && data.password === cred.password) {
        //     let roleUpper = resp.data.role;
        //     if (Roles.includes(roleUpper)) {
        //     localStorage.setItem('customer.token', 'resp.data.jwttoken');
        //     dispatch({ type: Types.LOGIN_SUCCESS, payload: {} });
        //      } else {
        //          dispatch({ type: Types.ALERT_ERROR, payload: { message: 'Invalid Access. Role is not Authorized.' } });
        //          dispatch({ type: Types.LOGIN_ERROR });
        //      }
        // } else {
        //     dispatch({ type: Types.ALERT_ERROR, payload: { message: 'Invalid Credentials' } });
        //     dispatch({ type: Types.LOGIN_ERROR });
        // }
        }).catch((error) => {
             console.log(error.response)
             dispatch({ type: Types.ALERT_ERROR, payload: { message: error.response?.data?.message } });
             dispatch({ type: Types.LOGIN_ERROR });
        });
    }
};

export const ForgotPassword = (data) => {

    return (dispatch) => {
        dispatch({ type: Types.FORGOT_REQUEST });
        // axios.post(baseUrl + '/getToken', data).then(resp => {
        return axios.post(baseUrl + '/authenticate/forgetPassword', data).then(resp => {
            if (resp.status === 200) {
                // let roleUpper = resp.data.role;
                // if (Roles.includes(roleUpper)) {
                // localStorage.setItem('customer.token', resp.data.jwttoken);
                // dispatch({ type: Types.LOGIN_SUCCESS, payload: resp.data });
                // } else {
                //     dispatch({ type: Types.ALERT_ERROR, payload: { message: 'Invalid Access. Role is not Authorized.' } });
                //     dispatch({ type: Types.LOGIN_ERROR });
                // }
            } else {
                dispatch({ type: Types.ALERT_ERROR, payload: { message: resp.data?.message } });
                dispatch({ type: Types.FORGOT_ERROR });
            }
            return resp;
        }).catch((error) => {
            console.log(error.response)
            dispatch({ type: Types.ALERT_ERROR, payload: { message: error.response?.data?.message } });
            dispatch({ type: Types.FORGOT_ERROR });
        });
    }
};

export const ResetPassword = (data) => {

    return (dispatch) => {
        dispatch({ type: Types.RESET_REQUEST });
        // axios.post(baseUrl + '/getToken', data).then(resp => {
        return axios.post(baseUrl + '/authenticate/setPassword', data).then(resp => {
            if (resp.status === 200) {
                // let roleUpper = resp.data.role;
                // if (Roles.includes(roleUpper)) {
                // localStorage.setItem('customer.token', resp.data.jwttoken);
                // dispatch({ type: Types.LOGIN_SUCCESS, payload: resp.data });
                // } else {
                dispatch({ type: Types.ALERT_SUCCESS, payload: { message: 'Password has been Reset' } });
                dispatch({ type: Types.RESET_SUCCESS });
                // }
            } else {
                dispatch({ type: Types.ALERT_ERROR, payload: { message: resp.data?.message } });
                dispatch({ type: Types.RESET_ERROR });
            }
            return resp;
        }).catch((error) => {
            console.log(error.response)
            dispatch({ type: Types.ALERT_ERROR, payload: { message: error.response?.data?.message } });
            dispatch({ type: Types.RESET_ERROR });
        });
    }
};

export const UserLogout = () => {

    return (dispatch) => {
        localStorage.removeItem('customer.token');
        dispatch({ type: Types.USER_LOGOUT });
        dispatch({ type: Types.ALERT_ERROR, payload: { message: 'User Logged Out', duration: 1000 } });
    }
};

