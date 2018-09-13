import axios from 'axios';
import {FETCH_CLEANERS_PENDING, FETCH_CLEANERS_SUCCESS, FETCH_CLEANERS_FAILURE} from './types';
import {SERVER_URL} from '../config/api';

const fetchCleanersSuccess = (cleaners) => {
  return {type: FETCH_CLEANERS_SUCCESS, payload: cleaners}
}

const fetchCleanersFailure = (error) => {
  return {type: FETCH_CLEANERS_FAILURE, payload: error}
}

const fetchCleanersPending = () => {
  return {type: FETCH_CLEANERS_PENDING}
}

export const fetchCleaners = (criteria) => {
  return async dispatch => {
    dispatch(fetchCleanersPending());
    if(criteria){
      let priceMin = criteria.priceMin;
      let priceMax = criteria.priceMax;
      var cleaners = await axios.get(`${SERVER_URL}/users/`)
      let result = cleaners.filter(c => {
        if (priceMin && priceMax){
          return c.price >= priceMin && c.price <=priceMax;
        }else if(priceMin){
          return c.price >= priceMin;
        }else if(priceMax){
          return c.price <= priceMax;
        }else {
          return true;
        }
      });

      dispatch(fetchCleanersSuccess(result));
    }else{
      var cleaners = await getCleaners();
      dispatch(fetchCleanersSuccess(cleaners))
    }
  }
};

//test function

function getCleaners() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cleaners);
    }, 0);
  })
};

const cleaners = [
  {
    id: 1,
    firstName: 'alice',
    lastName: 'jlice',
    rating: '7',
    languages: [
      {id:'en', name:'English'},
      {id:'pl', name:'Polish'}
    ],
    services: [
      {id:1, name:'Ironing'},
      {id:2, name:'Cleaning'}
    ],
    phone: '12333',
    price: 20,
    reviews: [
      {id:1, title: 'excellent', date: new Date(), comment:'bla bla bla comment', rating: 8},
      {id:2, title: "She's ugly", date: new Date(), comment:'ugly girl mannn', rating: 2},
      {id:3, title: "Perfect", date: new Date(), comment:'Leaves everything super clean and nice...', rating: 7}
    ]
  }, {
    id: 2,
    firstName: 'alice2',
    lastName: 'alice',
    rating: '8',
    languages: [],
    phone: '222',
    price: 12
  }, {
    id: 3,
    firstName: 'alice3',
    lastName: 'alice',
    rating: '10',
    languages: [
      {id:'en', name:'English'},
      {id:'pl', name:'Polish'}
    ],
    phone: '3333',
    price: 15
  }, {
    id: 4,
    firstName: 'alice4',
    lastName: 'alice',
    rating: '10',
    languages: [],
    phone: '444',
    price: 10
  }, {
    id: 5,
    firstName: 'alice5',
    lastName: 'alice',
    rating: '10',
    languages: [],
    phone: '444',
    price: 100
  }, {
    id: 6,
    firstName: 'alice6',
    lastName: 'alice',
    rating: '10',
    languages: [],
    phone: '444',
    price: 50
  }
]