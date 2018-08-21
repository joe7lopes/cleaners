import { 
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_PENDING,
  SUCCESS,
  FAILURE,
  PENDING
} from '../actions/types';

const INITIAL_STATE = {
  profile: {},
  status: undefined
}
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_PROFILE_SUCCESS:
    console.log("fetch profile success", action.payload);
      return {
        ...state,
        profile: action.payload.data,
        status: SUCCESS
      };
    case FETCH_PROFILE_FAILURE:
    console.log("fetch profile failure", action.payload);
      return {
        ...state,
        error: action.payload,
        status: FAILURE
      };
    case FETCH_PROFILE_PENDING:
    console.log("fetch profile pending", action.payload);
      return {
        ...state,
        status: PENDING
      };
    default:
      return state;
  }

};