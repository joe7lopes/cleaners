import axios from 'axios';
import firebase from '../config/firebase';
import { 
  REGISTER_PHONE_SUCCESS,
  REGISTER_PHONE_FAILURE,
  REGISTER_PHONE_PENDING,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_PENDING
} from './types';

const ROOT_URL = 'https://us-central1-cleaners-c4bcb.cloudfunctions.net';


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

const signInSuccess = () => {
  return {
    type: SIGN_IN_SUCCESS
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

export const registerPhone = (phone) => {
  return async dispatch => {
    dispatch(registerPhonePending());
    try{
      await axios.post(`${ROOT_URL}/createUser`,{phone});
      await axios.post(`${ROOT_URL}/requestOneTimePassword`,{phone});
      dispatch(registerPhoneSuccess());
    }catch(err){
      dispatch(registerPhoneFailure(err));
    }
  }

};

export const signIn = (phone, code) => {
  return async dispatch => {
    dispatch(signInPending());
    try{
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`,{phone, code});
      firebase.auth().signInWithCustomToken(data.token);
      dispatch(signInSuccess());
    }catch(err){
      dispatch(signInFailure(err));
    }
  }

};
