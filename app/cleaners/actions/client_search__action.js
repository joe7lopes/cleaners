import axios from 'axios';
import {FETCH_CLEANERS_PENDING, FETCH_CLEANERS_SUCCESS, FETCH_CLEANERS_FAILURE} from './types';
import {CLEANER} from '../config/profileTypes';
import {SERVER_URL} from '../config/api';

const fetchCleanersSuccess = (cleaners) => {
  return {type: FETCH_CLEANERS_SUCCESS, payload: cleaners}
}

const fetchCleanersFailure = (error) => {
  return {type: FETCH_CLEANERS_FAILURE, payload: error}
}

const fetchCleanersPending = () => {
  return {type: FETCH_CLEANERS_PENDING}
}

export const fetchCleaners = (criteria) => {
  return async dispatch => {
    dispatch(fetchCleanersPending());
    if(criteria){
      var req = await axios.get(`${SERVER_URL}/users?type=${CLEANER}`,criteria);
      dispatch(fetchCleanersSuccess(req.data));
    }else{
      var req = await axios.get(`${SERVER_URL}/users?type=${CLEANER}`);
      dispatch(fetchCleanersSuccess(req.data))
    }
  }
};