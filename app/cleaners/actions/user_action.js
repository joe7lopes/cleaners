import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {
    CREATE_USER_FAILURE,
    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS,
    FETCH_PROFILE_FAILURE,
    FETCH_PROFILE_PENDING,
    FETCH_PROFILE_SUCCESS,
    SAVE_PROFILE_FAILURE,
    SAVE_PROFILE_PENDING,
    SAVE_PROFILE_SUCCESS,
} from './types';

import {SERVER_URL} from '../config/api';
import ResponseError from "./response_error";

const createUserPending = () => ({
    type: CREATE_USER_PENDING
})

const createUserSuccess = (user) => ({
    type: CREATE_USER_SUCCESS,
    payload: user
});

const createUserFailure = (err) => ({
    type: CREATE_USER_FAILURE,
    payload: err
});

const fetchProfilePending = () => ({
    type: FETCH_PROFILE_PENDING
});

const fetchProfileSuccess = (profile) => ({
    type: FETCH_PROFILE_SUCCESS,
    payload: profile
});

const fetchProfileFailure = (err) => ({
    type: FETCH_PROFILE_FAILURE,
    payload: err
});

const saveProfilePending = () => ({
    type: SAVE_PROFILE_PENDING
});

const saveProfileSuccess = (profile) => ({
    type: SAVE_PROFILE_SUCCESS,
    payload: profile
});

const saveProfileFailure = (err) => ({
    type: SAVE_PROFILE_FAILURE,
    payload: err
});

export const createUser = (newUser) => {
    return async (dispatch) => {
        dispatch(createUserPending())
        try {
            let token = await AsyncStorage.getItem('auth_token');
            let config = {headers: {'x-access-token': token ? token : ''}};
            let {data} = await axios.post(`${SERVER_URL}/users`, newUser, config);
            dispatch(createUserSuccess(data));
        } catch (err) {
            const error = new ResponseError(err.response);
            dispatch(createUserFailure(error));
        }
    }
}

export const fetchProfile = () => {
    return async dispatch => {
        dispatch(fetchProfilePending());
        try {
            let token = await AsyncStorage.getItem('auth_token');
            let config = {headers: {'x-access-token': token ? token : ''}};
            let {data} = await axios.get(`${SERVER_URL}/users/user-profile`, config);
            dispatch(fetchProfileSuccess(data));
        } catch (err) {
            const error = new ResponseError(err.response);
            dispatch(fetchProfileFailure(error));
        }
    }
};

export const saveProfile = (profile) => {
    return async dispatch => {
        dispatch(saveProfilePending());
        try {
            let token = await AsyncStorage.getItem('auth_token');
            let config = {headers: {'x-access-token': token ? token : ''}};
            let {data} = await axios.patch(`${SERVER_URL}/users/${profile.uid}`,profile, config);
            dispatch(saveProfileSuccess(data));
        } catch (err) {
            console.log("error in saving profile");
            const error = new ResponseError(err.response);
            dispatch(saveProfileFailure(error));
        }
    }
};

