import axios from 'axios';
import {
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_FAILURE,
  FETCH_OFFERS_PENDING,
  APPROVE_OFFER_SUCCESS,
  APPROVE_OFFER_FAILURE,
  APPROVE_OFFER_PENDING,
  REJECT_OFFER_SUCCESS,
  REJECT_OFFER_FAILURE,
  REJECT_OFFER_PENDING,
  PENDING,
  APPROVED,
  REJECTED
} from './types';

import { SERVER_URL } from '../config/api';

const fetchOffersSuccess = (offers) => {
  return {type: FETCH_OFFERS_SUCCESS, payload: offers}
}

const fetchOffersFailure = (error) => {
  return {type: FETCH_OFFERS_FAILURE, payload: error}
}

const fetchOffersPending = () => {
  return {type: FETCH_OFFERS_PENDING}
}

const approveOfferPending = () => {
  return { type: APPROVE_OFFER_PENDING}
}

const approveOfferSuccess = () => {
  return {type: APPROVE_OFFER_SUCCESS}
}

const approveOfferFailure = (error) => {
  return { type: APPROVE_OFFER_FAILURE, payload: error}
}

const rejectOfferPending = () => {
  return { type: REJECT_OFFER_PENDING}
}

const rejectOfferSuccess = () => {
  return {type: REJECT_OFFER_SUCCESS}
}

const rejectOfferFailure = (error) => {
  return { type: REJECT_OFFER_FAILURE, payload: error}
}

export const fetchOffers = () => {
  return async dispatch => {
    dispatch(fetchOffersPending());
    try{
      //TODO get this from store
      const userId = 123;
      let req = await axios.get(`${SERVER_URL}/users/${userId}/offers`);
      const offers = req.data;
      dispatch(fetchOffersSuccess(offers));
    }catch(err){
      dispatch(fetchOffersFailure(err));
    }
  }
}

export const approveOffer = (offerId) => {
  return async dispatch => {
    dispatch(approveOfferPending());
    try{
      await axios.patch(`${SERVER_URL}/offers/${offerId}`,{id: offerId, status: APPROVED});
      dispatch(approveOfferSuccess());
      dispatch(fetchOffers());
    }catch(err){
      dispatch(approveOfferFailure(err));
    }
  }
}

export const rejectOffer = (offerId) => {
  return async dispatch => {
    dispatch(rejectOfferPending());
    try{
      await axios.patch(`${SERVER_URL}/offers/${offerId}`,{id: offerId, status: REJECTED});
      dispatch(rejectOfferSuccess());
      dispatch(fetchOffers());
    }catch(err){
      dispatch(rejectOfferFailure(err));
    }
  }
}
