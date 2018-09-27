import axios from 'axios';
import {
  CREATE_JOB_PENDING,
  CREATE_JOB_FAILURE,
  CREATE_JOB_SUCCESS
} from './types';

import {SERVER_URL} from '../config/api';

const createJobPending = () => ({type: CREATE_JOB_PENDING});

const createJobSuccess = (job) => ({type: CREATE_JOB_SUCCESS, payload: job});

const createJobFailure = (err) => ({type: CREATE_JOB_FAILURE, payload: err});

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