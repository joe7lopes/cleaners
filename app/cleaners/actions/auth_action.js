import axios from 'axios';
import { 
  REGISTER_PHONE_SUCCESS,
  REGISTER_PHONE_FAILURE,
  REGISTER_PHONE_PENDING,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_PENDING
} from './types';

import {SERVER_URL} from '../config/api';

const registerPhoneSuccess = () => {
  return {
    type: REGISTER_PHONE_SUCCESS
  }
}

const registerPhoneFailure = (error) => {
  return {
    type: REGISTER_PHONE_FAILURE,
    payload: error
  }
}

const registerPhonePending = () => {
  return {
    type: REGISTER_PHONE_PENDING
  }
}

const signInSuccess = (authData) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: authData
  }
}

const signInFailure = (err) => {
  return {
    type: SIGN_IN_FAILURE,
    error: err
  }
}

const signInPending = () => {
  return {
    type: SIGN_IN_PENDING
  }
}

export const signIn = (phone, code) => {
  return dispatch => {
    dispatch(signInPending());
    if(phone === String(123) || code === String(123)){
      dispatch(signInSuccess({token: "123token"}))
    }else{
      dispatch(signInFailure({err: 'wrong code provided'}));
    }
  }
}


export const registerPhone = (phone) => {
  return async dispatch => {
    dispatch(registerPhonePending());
    try{
      await axios.post(`${SERVER_URL}/createUser`,{phone});
      await axios.post(`${SERVER_URL}/requestOneTimePassword`,{phone});

      dispatch(registerPhoneSuccess());
    }catch(err){
      dispatch(registerPhoneFailure(err));
    }
  }
};

