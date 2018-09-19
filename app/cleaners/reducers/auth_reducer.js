import {
    FAILURE,
    LOGIN_FAILURE,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    PENDING,
    REGISTER_PHONE_FAILURE,
    REGISTER_PHONE_PENDING,
    REGISTER_PHONE_SUCCESS,
    SUCCESS
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN_PENDING:
            return {
                ...state,
                status: PENDING
            }
        case LOGIN_SUCCESS:
            const {token, phone} = action.payload;
            return {...state, status: SUCCESS, token, phone}
        case LOGIN_FAILURE:
            return {...state, status: FAILURE};
        case REGISTER_PHONE_PENDING:
            return {...state, status: PENDING};
        case REGISTER_PHONE_SUCCESS:
            return {...state, status: SUCCESS, phone: action.payload};
        case REGISTER_PHONE_FAILURE:
            return {...state, error: action.payload, status: FAILURE};
        default:
            return state;
    }

};