import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {
  CREATE_JOB_PENDING,
  CREATE_JOB_FAILURE,
  CREATE_JOB_SUCCESS,
  FETCH_JOBS_PENDING,
  FETCH_JOBS_FAILURE,
  FETCH_JOBS_SUCCESS
} from './types';

import {SERVER_URL} from '../config/api';

const createJobPending = () => ({type: CREATE_JOB_PENDING});
const createJobSuccess = (job) => ({type: CREATE_JOB_SUCCESS, payload: job});
const createJobFailure = (err) => ({type: CREATE_JOB_FAILURE, payload: err});

const fetchJobsPending = () => ({type: FETCH_JOBS_PENDING});
const fetchJobsSuccess = (jobs) => ({type: FETCH_JOBS_SUCCESS, payload: jobs});
const fetchJobsFailure = (err) => ({type: FETCH_JOBS_FAILURE, payload: err});


export const createJob = (data) => {
  return async dispatch => {
    dispatch(createJobPending());
    try {
      let token = await AsyncStorage.getItem('auth_token');
      const config = {
        headers: {'x-access-token': token || ''}
      };
      let req = axios.post(`${SERVER_URL}/jobs`, data, config);
      dispatch(createJobSuccess(req.data));
    } catch (err) {
      dispatch(createJobFailure(err));
    }
  }
}

export const fetchJobs = () => {
  return async dispatch => {
    dispatch(fetchJobsPending());
    try{
      let token = await AsyncStorage.getItem('auth_token');
      const config = {headers: {'x-access-token': token || ''}};
      let req = await axios.get(`${SERVER_URL}/jobs`,config);
      dispatch(fetchJobsSuccess(req.data));
    }catch(err){
      dispatch(fetchJobsFailure(err));
    }
  }
}

export const approveJob = () => {
  return async dispatch => {
    
  }
}
