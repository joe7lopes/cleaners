import _ from 'lodash';
import {
    CREATE_USER_FAILURE,
    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS,
    FAILURE,
    FETCH_PROFILE_FAILURE,
    FETCH_PROFILE_PENDING,
    FETCH_PROFILE_SUCCESS,
    PENDING,
    SAVE_PROFILE_FAILURE,
    SAVE_PROFILE_PENDING,
    SAVE_PROFILE_SUCCESS,
    SUCCESS
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_USER_PENDING:
            return {...state, status: PENDING};
        case CREATE_USER_SUCCESS:
            return {...state, status: SUCCESS, profile: action.payload};
        case CREATE_USER_FAILURE:
            return {...state, status: FAILURE, error: action.payload};
        case FETCH_PROFILE_PENDING:
            return {...state, status: PENDING};
        case FETCH_PROFILE_SUCCESS:{
            let profile = action.payload;
            const languages = _.mapKeys(profile.languages, 'code');
            profile.languages = languages
            return {...state, status: SUCCESS, profile};
        }
        case FETCH_PROFILE_FAILURE:
            return {...state, status: FAILURE};
        case SAVE_PROFILE_PENDING:
            return {...state, status: PENDING};
        case SAVE_PROFILE_SUCCESS:
            return {...state, status: SUCCESS, profile: action.payload};
        case SAVE_PROFILE_FAILURE:
            return {...state, status: FAILURE, error: action.payload};
        default:
            return state;
    }

};