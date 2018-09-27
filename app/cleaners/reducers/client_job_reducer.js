import {
  CREATE_JOB_PENDING,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_FAILURE,
  PENDING,
  SUCCESS,
  FAILURE
} from '../actions/types';

export default (state = {}, action) => {

  switch(action.type){
    case CREATE_JOB_PENDING: 
      return {...state, status: PENDING};
    case CREATE_JOB_SUCCESS:
      let pendingJobs = {...state.pending}
      const {uid} = action.payload;
      pendingJobs[uid] = action.payload;
      return {...state, status: SUCCESS, pending: pendingJobs };
    case CREATE_JOB_FAILURE:
      return {...state, status: FAILURE, error: action.payload};
    default:
      return state;
  }
}