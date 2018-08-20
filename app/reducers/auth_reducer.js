import { 
  REGISTER_PHONE_SUCCESS,
  REGISTER_PHONE_FAILURE,
  REGISTER_PHONE_PENDING,
  SUCCESS,
  FAILURE,
  PENDING
} from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case REGISTER_PHONE_SUCCESS:
      return {
        ...state,
        status: SUCCESS
      };
    case REGISTER_PHONE_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILURE
      };
    case REGISTER_PHONE_PENDING:
      return {
        ...state,
        status: PENDING
      };
    default:
      return state;
  }

};