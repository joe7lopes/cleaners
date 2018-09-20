import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {
    CREATE_USER_FAILURE,
    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS,
    FETCH_PROFILE_FAILURE,
    FETCH_PROFILE_PENDING,
    FETCH_PROFILE_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS,
} from './types';

import {SERVER_URL} from '../config/api';

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

const fetchUserPending = () => ({
    type: FETCH_USER_PENDING
});

const fetchUserSuccess = (user) => ({
    type: FETCH_USER_SUCCESS,
    payload: user
});

const fetchUserFailure = (err) => ({
    type: FETCH_USER_FAILURE,
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

export const createUser = (newUser) => {
    return async (dispatch) => {
        dispatch(createUserPending())
        try {
            let {data} = await axios.post(`${SERVER_URL}/users`, newUser);
            dispatch(createUserSuccess(data));
        } catch (err) {
            dispatch(createUserFailure(err));
        }
    }
}

export const fetchUser = (id) => {
    return async dispatch => {
        dispatch(fetchUserPending());
        try {
            let {data} = await axios.get(`${SERVER_URL}/users/${id}`);
            dispatch(fetchUserSuccess(data));
        } catch (err) {
            dispatch(fetchUserFailure({error: err}));
        }
    }

};

export const fetchProfile = () => {
    return async dispatch => {
        dispatch(fetchProfilePending());
        try {
            let token = await AsyncStorage.getItem('auth_token');
            let config = {headers: {'x-access-token': token ? token : ''}};
            let {data} = await axios.get(`${SERVER_URL}/users/user-profile`, config);
            console.log(data);
            dispatch(fetchProfileSuccess(data));
        } catch (err) {
            dispatch(fetchProfileFailure({error: err}));
        }
    }
};

