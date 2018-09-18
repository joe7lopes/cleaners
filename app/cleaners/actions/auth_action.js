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

export const signIn = (phone, verificationCode) => {
  return async dispatch => {
    dispatch(signInPending());

    try{
      // let {data} = await axios.post(`${SERVER_URL}/sign-in`,{phone,verificationCode});
      let token = await fakeSignIn(phone, verificationCode);
      dispatch(signInSuccess(token));
    }catch(err){
      dispatch(signInFailure({err}));
    }
    

    
  }
}


export const registerPhone = (phone) => {
  return async dispatch => {
    dispatch(registerPhonePending());
    try{
      // await axios.post(`${SERVER_URL}/sign-up`,{phone});
      await fakeSignUp(phone);
      dispatch(registerPhoneSuccess());
    }catch(err){
      dispatch(registerPhoneFailure(err));
    }
  }
};

//MOCKED fuctions

const fakeSignUp = (phone) => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(phone);
    }, 2000);
  });
};

const fakeSignIn = (phone, verificationCode) => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      let token = "123ddd"
      resolve(token);
    }, 2000);
  });
};
