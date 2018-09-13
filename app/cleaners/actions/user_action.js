import axios from 'axios';
import { 
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_PENDING,
  SAVE_USER_PENDING,
  SAVE_USER_SUCCESS
} from './types';

const ROOT_URL = 'https://us-central1-cleaners-c4bcb.cloudfunctions.net/api';

export const fetchUserPending = () => {
  return {
    type: FETCH_USER_PENDING
  }
};

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

export const fetchUser = (id) => {
  return async dispatch => {
    dispatch(fetchUserPending());
    try{
      var request = await axios.get(`${ROOT_URL}/users/${id}`);
      const user = request.data;
      dispatch(fetchUserSuccess(user));
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
    console.log("in action state",getState().user);

    setTimeout(() => {
      dispatch({
        type: SAVE_USER_SUCCESS
      })
    }, 3000);
  }

};