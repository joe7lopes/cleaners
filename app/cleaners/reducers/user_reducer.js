import {
    CREATE_USER_FAILURE,
    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS,
    FAILURE,
    FETCH_PROFILE_FAILURE,
    FETCH_PROFILE_PENDING,
    FETCH_PROFILE_SUCCESS,
    PENDING,
    SUCCESS
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_USER_PENDING:
            return {...state, status: PENDING};
        case CREATE_USER_SUCCESS:
            return {...state, status: SUCCESS, profile: action.payload};
        case CREATE_USER_FAILURE:
            return {...state, status: FAILURE};
        case FETCH_PROFILE_PENDING:
            return {...state, status: PENDING};
        case FETCH_PROFILE_SUCCESS:
            return {...state, status: SUCCESS, profile: action.payload};
        case FETCH_PROFILE_FAILURE:
            return {...state, status: FAILURE};
        default:
            return state;
    }

};