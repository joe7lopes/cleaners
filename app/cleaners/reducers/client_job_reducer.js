import _ from 'lodash';

import {
  CREATE_JOB_PENDING,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_FAILURE,
  PENDING,
  SUCCESS,
  FAILURE,
  FETCH_JOBS_PENDING,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  jobStatus,
} from '../actions/types';

export default (state = {}, action) => {
  let pendingJobs = {};
  let approvedJobs = {};
  let rejectedJobs = {};

  switch(action.type){
    case CREATE_JOB_PENDING: 
      return {...state, status: PENDING};
    case CREATE_JOB_SUCCESS:
      pendingJobs = {...state.pending}
      const {uid} = action.payload;
      pendingJobs[uid] = action.payload;
      return {...state, status: SUCCESS, pending: pendingJobs };
    case CREATE_JOB_FAILURE:
      return {...state, status: FAILURE, error: action.payload};
    case FETCH_JOBS_PENDING:
      return {...state, fetchStatus: PENDING};
    case FETCH_JOBS_SUCCESS: 
      const jobs = action.payload;

      _.forOwn(jobs,(val, key)=>{
        const job = jobs[key];
        const status = String(job.status);

        if(status === jobStatus.cleanerPending){
          pendingJobs = {...pendingJobs, [key]:job};
        }else if(status === jobStatus.cleanerApproved){
          approvedJobs = {...approvedJobs, [key]:job};
        }else if(status === jobStatus.cleanerRejected || status === jobStatus.clientRejected ){
          rejectedJobs = {...rejectedJobs, [key]:job};
        }else{
          console.log("cannot get status from job");
        }

      });
      
      return {
        ...state, 
        fetchStatus: SUCCESS,
        pending: pendingJobs,
        approved: approvedJobs,
        rejected: rejectedJobs
        }
      
      case FETCH_JOBS_FAILURE:
      return {...state, fetchStatus: FAILURE, error: action.payload};
    default:
      return state;
  }
}