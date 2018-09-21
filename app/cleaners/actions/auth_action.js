import axios from 'axios';
import {AsyncStorage} from 'react-native';
import ResponseError from './response_error';
import {
    LOGIN_FAILURE,
    LOGIN_PENDING,
    LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_PENDING, LOGOUT_SUCCESS,
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
    payload: err
});

const loginPending = () => ({
    type: LOGIN_PENDING
});

const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
})

const logoutFailure = (err) => ({
    type: LOGOUT_FAILURE,
    payload: err
})

const logoutPending = () => ({
    type: LOGOUT_PENDING
})


export const login = (phone, verificationCode) => {
    return async dispatch => {
        dispatch(loginPending());
        try {
            let {data} = await axios.post(`${SERVER_URL}/auth/login`, {phone, verificationCode});
            const token = data.token;
            if(!token){dispatch(loginFailure({error: 'token not present'})); }
            await AsyncStorage.setItem('auth_token', token);
            dispatch(loginSuccess({token, phone}));
        } catch (err) {
            const error = new ResponseError(err.response);
            dispatch(loginFailure(error));
        }
    }
};

export const logout = () => {
    return async dispatch => {
        dispatch(logoutPending());
        try{
            await AsyncStorage.removeItem('auth_token');
            dispatch(logoutSuccess());
        }catch(err){
            dispatch(logoutFailure({error: 'unable to logout'}));
        }
    }
};

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
