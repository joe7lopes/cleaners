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

const ROOT_URL = 'https://us-central1-cleaners-c4bcb.cloudfunctions.net';

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
      let offers = await getOffers()
      dispatch(fetchOffersSuccess(offers));
    }catch(err){
      dispatch(fetchOffersFailure(err));
    }
  }
}

export const approveOffer = (id) => {
  return async dispatch => {
    dispatch(approveOfferPending());
    try{
      await setApprovedOffer(id);
      dispatch(approveOfferSuccess());
      dispatch(fetchOffers())
    }catch(err){
      dispatch(approveOfferFailure(err));
    }
  }
}

export const rejectOffer = (id) => {
  return async dispatch => {
    dispatch(rejectOfferPending());
    try{
      await setRejectOffer(id);
      dispatch(rejectOfferSuccess());
      dispatch(fetchOffers())
    }catch(err){
      dispatch(rejectOfferFailure(err));
    }
  }
}


//MOCKED BACKEND

const getOffers = () =>{
  return  new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(offersData);
    }, 3000);
  })
} 

var offersData = [
  {id: 1, firstName: 'alice', lastName: 'macee', address:'Ul. traugutta', date: new Date(), price: 20, status: PENDING},
  {id: 2, firstName: 'alice', lastName: 'macee', date: new Date(), price: 20, status: PENDING},
  {id: 3, firstName: 'alice', lastName: 'macee', date: new Date(), price: 20,status: APPROVED},
  {id: 4, firstName: 'Albert', lastName: 'maceerr', date: new Date(), price: 100,status: REJECTED}
]

const setApprovedOffer = (id) => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      offersData[id - 1].status = APPROVED;
      resolve();
    }, 3000);
  });
}

const setRejectOffer = (id) => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      offersData[id - 1].status = REJECTED;
      resolve();
    }, 3000);
  });
}