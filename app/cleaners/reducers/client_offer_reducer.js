import {
  FETCH_OFFERS_FAILURE,
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_PENDING,
  APPROVE_OFFER_FAILURE,
  APPROVE_OFFER_SUCCESS,
  APPROVE_OFFER_PENDING,
  PENDING,
  SUCCESS,
  FAILURE,
  APPROVED,
  REJECTED
} from '../actions/types';

const INITIAL_STATE = {
  fetchStatus: undefined,
  approveStatus: undefined,
  rejectStatus: undefined,
  offers: {
    pending: [],
    approved: [],
    rejected: []
  }
}

export default (state = INITIAL_STATE, action) => {

  switch(action.type){
    case FETCH_OFFERS_PENDING:
      return {...state, fetchStatus: PENDING }
    case FETCH_OFFERS_SUCCESS:
    const offers = action.payload;
    const pending = offers.filter(offer => offer.status === PENDING);
    const approved = offers.filter(offer => offer.status === APPROVED);
    const rejected = offers.filter(offer => offer.status === REJECTED);

      return {
        ...state, 
        fetchStatus: SUCCESS, 
        offers: { pending, approved, rejected }
      }
    case FETCH_OFFERS_FAILURE:
      return {...state, fetchStatus: FAILURE}

    case APPROVE_OFFER_PENDING:
      return {...state, approveStatus: PENDING }
    case APPROVE_OFFER_SUCCESS:
      return {...state,approveStatus: SUCCESS}
    case APPROVE_OFFER_FAILURE: 
      return {...state, approveStatus: FAILURE}
    default:
      return state;
  }
}