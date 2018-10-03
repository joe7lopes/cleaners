//AUTH
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const PENDING = 'PENDING';

export const REGISTER_PHONE_SUCCESS = 'register_phone_success';
export const REGISTER_PHONE_FAILURE = 'register_phone_failure';
export const REGISTER_PHONE_PENDING = 'register_phone_pending';

export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_FAILURE = 'login_failure';
export const LOGIN_PENDING = 'login_pending';

export const LOGOUT_SUCCESS = 'logout_success';
export const LOGOUT_FAILURE = 'logout_failure';
export const LOGOUT_PENDING = 'logout_pending';

//USER ACTIONS
export const CREATE_USER_SUCCESS = 'create_user_success';
export const CREATE_USER_FAILURE = 'create_user_failure';
export const CREATE_USER_PENDING = 'create_user_pending';

export const FETCH_PROFILE_SUCCESS = 'fetch_profile_success';
export const FETCH_PROFILE_FAILURE = 'fetch_profile_failure';
export const FETCH_PROFILE_PENDING = 'fetch_profile_pending';

export const SAVE_PROFILE_SUCCESS = 'save_profile_success';
export const SAVE_PROFILE_FAILURE = 'save_profile_failure';
export const SAVE_PROFILE_PENDING = 'save_profile_pending';

//SEARCH ACTIONS

export const FETCH_CLEANERS_SUCCESS = 'fetch_cleaners_success';
export const FETCH_CLEANERS_FAILURE = 'fetch_cleaners_failure';
export const FETCH_CLEANERS_PENDING = 'fetch_cleaners_pending';

//JOB ACTIONS
export const CREATE_JOB_SUCCESS = 'create_job_success';
export const CREATE_JOB_FAILURE = 'create_job_failure';
export const CREATE_JOB_PENDING = 'create_job_pending';

export const FETCH_JOBS_SUCCESS = 'fetch_job_success';
export const FETCH_JOBS_FAILURE = 'fetch_job_failure';
export const FETCH_JOBS_PENDING = 'fetch_job_pending';

export const REJECT_JOB_PENDING = 'reject_job_pending';
export const REJECT_JOB_SUCCESS = 'reject_job_success';
export const REJECT_JOB_FAILURE = 'reject_job_failure';

export const jobStatus = {
  cleanerPending: 'CLEANER_PENDING',
  cleanerRejected: 'CLEANER_REJECTED',
  cleanerApproved: 'CLEANER_APPROVED',
  clientRejected: 'CLIENT_REJECTED',
}

// todo do the rest of the action.
export const APPROVED = 'APPROVED';
export const REJECTED = 'REJECTED';
