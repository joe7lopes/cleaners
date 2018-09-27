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
        cleaners: action.payload.cleaners,
        filter: action.payload.filter,
        status: SUCCESS
      };
    case FETCH_CLEANERS_FAILURE:
      return {
        ...state,
        filter: action.payload.filter,
        error: action.payload.error,
        status: FAILURE
      };
    case FETCH_CLEANERS_PENDING:
      return {
        ...state,
        filter: action.payload,
        status: PENDING
      };
    default:
      return state;
  }

};