import { 
 FETCH_CLEANERS_SUCCESS,
 FETCH_CLEANERS_FAILURE,
 FETCH_CLEANERS_PENDING,
 SUCCESS,
 FAILURE,
 PENDING
} from '../actions/types';

export default (state = {filter: {}}, action) => {
  switch(action.type) {
    case FETCH_CLEANERS_SUCCESS:
      return {
        ...state,
        cleaners: action.payload,
        status: SUCCESS
      };
    case FETCH_CLEANERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILURE
      };
    case FETCH_CLEANERS_PENDING:
      return {
        ...state,
        status: PENDING
      };
    default:
      return state;
  }

};