import axios from 'axios';
import { 
  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_PENDING,
  SAVE_USER_PENDING,
  SAVE_USER_SUCCESS,
} from './types';

import { SERVER_URL } from '../config/api';

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

export const fetchUserPending = () => ({
    type: FETCH_USER_PENDING
});

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user
  }
};

export const fetchUserFailure = (err) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: err
  }
};


//dispatch actions

export const createUser = (newUser) => {
  return async (dispatch) => {
    dispatch(createUserPending())
    try{
      let {data} = await axios.post(`${SERVER_URL}/users`, newUser);
      dispatch(createUserSuccess(data));
    }catch(err){
      dispatch(createUserFailure(err));
    }
  }
}

export const fetchUser = (id) => {
  return async dispatch => {
    dispatch(fetchUserPending());
    try{
      var {data} = await axios.get(`${SERVER_URL}/users/${id}`);
      dispatch(fetchUserSuccess(data));
    }catch(err){
      dispatch(fetchUserFailure(err));
    }
  }

};

export const saveUser = (user) => {
  return async (dispatch, getState) => {
    dispatch({
      type: SAVE_USER_PENDING
    });
    setTimeout(() => {
      dispatch({
        type: SAVE_USER_SUCCESS
      })
    }, 3000);
  }

};
