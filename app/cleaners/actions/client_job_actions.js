import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {
  CREATE_JOB_PENDING,
  CREATE_JOB_FAILURE,
  CREATE_JOB_SUCCESS,
  FETCH_JOBS_PENDING,
  FETCH_JOBS_FAILURE,
  FETCH_JOBS_SUCCESS,
  REJECT_JOB_PENDING,
  REJECT_JOB_SUCCESS,
  REJECT_JOB_FAILURE
} from './types';

import {SERVER_URL} from '../config/api';

const createJobPending = () => ({type: CREATE_JOB_PENDING});
const createJobSuccess = (job) => ({type: CREATE_JOB_SUCCESS, payload: job});
const createJobFailure = (err) => ({type: CREATE_JOB_FAILURE, payload: err});

const fetchJobsPending = () => ({type: FETCH_JOBS_PENDING});
const fetchJobsSuccess = (jobs) => ({type: FETCH_JOBS_SUCCESS, payload: jobs});
const fetchJobsFailure = (err) => ({type: FETCH_JOBS_FAILURE, payload: err});

const rejectJobPending = () => ({type: REJECT_JOB_PENDING});
const rejectJobSuccess = (uid) => ({type: REJECT_JOB_SUCCESS, payload: uid});
const rejectJobFailure = (err) => ({type: REJECT_JOB_FAILURE, payload: err});

export const createJob = (data) => {
  return async dispatch => {
    dispatch(createJobPending());
    try {
      const job = await createJobFake(data);
      console.log("==JOB CREATED== ", job);
      dispatch(createJobSuccess(job));
    } catch (err) {
      dispatch(createJobFailure(err));
    }
  }
}

export const fetchJobs = () => {
  return async dispatch => {
    dispatch(fetchJobsPending());
    try{
      const jobs = await fetchJobsFake();
      console.log("==FETCHED JOBS== ", jobs);
      dispatch(fetchJobsSuccess(jobs));
    }catch(err){
      dispatch(fetchJobsFailure(err));
    }
  }
}

export const rejectJob = (uid) => {
  return async dispatch => {
    dispatch(rejectJobPending())
    try{
      await returnResponseAsPromise("bla");
      console.log("==REJECT JOB== ", uid);
      dispatch(rejectJobSuccess(uid))
    }catch(err){
      dispatch(rejectJobFailure(err));
    }
  }
}


//MOCK API
const createJobFake = async (data) => {
  const {cleaner, address, message, services } = data;
  const {uid, price} = cleaner;
  const jobUid = Math.floor(Math.random() * 100000);
  const response = {
    uid: jobUid,
    address,
    clientUid: "123",
    cleanerUid: uid,
    message,
    status: 'CLEANER_PENDING',
    price,
    services,
    createdAt: new Date()
  }
  
  return returnResponseAsPromise(response);
}

const fetchJobsFake = () => {
  const response = [
    {uid: 1, address: 'ul sss', cleanerUid: "1", price:"20", message: 'aaaa', status: 'CLEANER_PENDING', services: [], createdAt: new Date() },
    {uid: 2, address: 'ul sss2222', cleanerUid: "2", price:"100", message: 'asdsd', status: 'CLEANER_PENDING', services: [], createdAt: new Date() },
    {uid: 3, address: 'ul grabiszinzka', cleanerUid: "3", price:"40", message: 'bla bla bla', status: 'CLEANER_APPROVED', services: [], createdAt: new Date() }
  ]

  return returnResponseAsPromise(response);
}

const returnResponseAsPromise = (data) => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};