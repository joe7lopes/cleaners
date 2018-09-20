import axios from 'axios';
import ResponseError from './response_error';
import {
    LOGIN_FAILURE,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    REGISTER_PHONE_FAILURE,
    REGISTER_PHONE_PENDING,
    REGISTER_PHONE_SUCCESS
} from './types';

import {SERVER_URL} from '../config/api';

const registerPhoneSuccess = (phone) => ({
    type: REGISTER_PHONE_SUCCESS,
    payload: phone
});

const registerPhoneFailure = (error) => ({
    type: REGISTER_PHONE_FAILURE,
    payload: error
});

const registerPhonePending = () => ({
    type: REGISTER_PHONE_PENDING
});

const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: token
});

const loginFailure = (err) => ({
    type: LOGIN_FAILURE,
    error: err
});

const loginPending = () => ({
    type: LOGIN_PENDING
});


export const login = (phone, verificationCode) => {
    return async dispatch => {
        dispatch(loginPending());
        try {
            let {data} = await axios.post(`${SERVER_URL}/auth/login`, {phone, verificationCode});
            dispatch(loginSuccess({token: data.token, phone}));
        } catch (err) {
            console.log(err);
            dispatch(loginFailure({err}));
        }
    }
}

export const registerPhone = (phone) => {
    return async dispatch => {
        dispatch(registerPhonePending());
        try {
            await axios.post(`${SERVER_URL}/auth/register`, {phone});
            dispatch(registerPhoneSuccess({phone}));
        } catch (err) {
            const error = new ResponseError(err.response);
            dispatch(registerPhoneFailure(error));
        }
    }
};
