import { 
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  CREATE_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_PENDING,
  SAVE_USER_PENDING,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,
  SUCCESS,
  FAILURE,
  PENDING
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case CREATE_USER_PENDING:
      return {...state, status: PENDING};
    case CREATE_USER_SUCCESS:
      return {...state, status: SUCCESS, profile: action.payload};
    case CREATE_USER_FAILURE:
      return {...state, status: FAILURE};
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        profile: {...action.payload},
        status: SUCCESS
      };
    case FETCH_USER_FAILURE || SAVE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILURE
      };
    case FETCH_USER_PENDING || SAVE_USER_PENDING:
      return {
        ...state,
        status: PENDING
      };
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        status: SUCCESS
      }
    default:
      return state;
  }

};