import firebase from '../config/firebase';
import {FETCH_CLEANERS_PENDING, FETCH_CLEANERS_SUCCESS, FETCH_CLEANERS_FAILURE} from './types';

const ROOT_URL = 'https://us-central1-cleaners-c4bcb.cloudfunctions.net';

const fetchCleanersSuccess = (cleaners) => {
  return {type: FETCH_CLEANERS_SUCCESS, payload: cleaners}
}

const fetchCleanersFailure = (error) => {
  return {type: FETCH_CLEANERS_FAILURE, payload: error}
}

const fetchCleanersPending = () => {
  return {type: FETCH_CLEANERS_PENDING}
}

export const fetchCleaners = () => {
  return async dispatch => {
    dispatch(fetchCleanersPending());
    var cleaners = await getCleaners();
    dispatch(fetchCleanersSuccess(cleaners))
  }
};

//test function

function getCleaners() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cleaners);
    }, 3000);
  })
};

const cleaners = [
  {
    id: 1,
    firstName: 'alice',
    lastName: 'jlice',
    rating: '7',
    languages: [],
    services: [
      'ironing', 'cleaning'
    ],
    phone: '12333',
    price: 20
  }, {
    id: 2,
    firstName: 'alice2',
    lastName: 'alice',
    rating: '8',
    languages: [],
    phone: '222'
  }, {
    id: 3,
    firstName: 'alice3',
    lastName: 'alice',
    rating: '10',
    languages: [
      'PL', 'EN'
    ],
    phone: '3333'
  }, {
    id: 4,
    firstName: 'alice4',
    lastName: 'alice',
    rating: '10',
    languages: [],
    phone: '444'
  }, {
    id: 5,
    firstName: 'alice5',
    lastName: 'alice',
    rating: '10',
    languages: [],
    phone: '444'
  }, {
    id: 6,
    firstName: 'alice6',
    lastName: 'alice',
    rating: '10',
    languages: [],
    phone: '444'
  }
]