import { 
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_PENDING,
  SUCCESS,
  FAILURE,
  PENDING
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        status: SUCCESS
      };
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILURE
      };
    case FETCH_PROFILE_PENDING:
      return {
        ...state,
        status: PENDING
      };
    default:
      return state;
  }

};