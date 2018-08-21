import axios from 'axios';
import { 
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_PENDING
} from './types';

const ROOT_URL = 'https://us-central1-cleaners-c4bcb.cloudfunctions.net';

export const fetchProfilePending = () => {
  return {
    type: FETCH_PROFILE_PENDING
  }
};

export const fetchProfileSuccess = (profile) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    payload: profile
  }
};

export const fetchProfileFailure = (err) => {
  return {
    type: FETCH_PROFILE_FAILURE,
    payload: err
  }
};

export const fetchProfile = (id) => {
  return async dispatch => {
    dispatch(fetchProfilePending());
    try{
      let profile = await axios.get(`${ROOT_URL}/profile/${id}`);
      dispatch(fetchProfileSuccess(profile));
    }catch(err){
      dispatch(fetchProfileFailure(err));
    }
  }

};