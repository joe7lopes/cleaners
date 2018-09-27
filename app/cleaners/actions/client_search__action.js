import axios from 'axios';
import {FETCH_CLEANERS_PENDING, FETCH_CLEANERS_SUCCESS, FETCH_CLEANERS_FAILURE} from './types';
import {CLEANER} from '../config/profileTypes';
import {SERVER_URL} from '../config/api';

const fetchCleanersSuccess = (results) => ({
  type: FETCH_CLEANERS_SUCCESS, 
  payload: results
});

const fetchCleanersFailure = (results) => ({
  type: FETCH_CLEANERS_FAILURE, 
  payload: results
});

const fetchCleanersPending = (filter) => ({
  type: FETCH_CLEANERS_PENDING,
  payload: filter
});

export const fetchCleaners = (criteria) => {
  return async dispatch => {
    const filter = criteria;
    dispatch(fetchCleanersPending(filter));
    try{
      if(criteria){
        console.log("criteria", criteria);
        var {data} = await axios.get(`${SERVER_URL}/search/cleaners`,{params: criteria});
        result = {cleaners: data, filter}
        dispatch(fetchCleanersSuccess(result));
      }else{
        var {data} = await axios.get(`${SERVER_URL}/search/cleaners`);
        const result = {cleaners: data, filter};
        dispatch(fetchCleanersSuccess(result));
      }
    }catch(error){
      dispatch(fetchCleanersFailure({error, filter}));
    }
    
  }
};