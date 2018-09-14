import { 
  REGISTER_PHONE_SUCCESS,
  REGISTER_PHONE_FAILURE,
  REGISTER_PHONE_PENDING,
  SIGN_IN_PENDING,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SUCCESS,
  FAILURE,
  PENDING
} from '../actions/types';

const INITIAL_STATE = {
  token: undefined
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN_PENDING:
      return {
        ...state,
        status: PENDING
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        status: SUCCESS,
        token: action.payload.token
      }
    case SIGN_IN_FAILURE:
      return {
        ...state,
        status: FAILURE,
      }
    case REGISTER_PHONE_PENDING:
    return {
      ...state,
      status: PENDING
    };
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
    
    default:
      return state;
  }

};