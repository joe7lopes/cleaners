import axios from 'axios';
import {FETCH_CLEANERS_PENDING, FETCH_CLEANERS_SUCCESS, FETCH_CLEANERS_FAILURE} from './types';
import {SERVER_URL} from '../config/api';

const fetchCleanersSuccess = (results) => ({
  type: FETCH_CLEANERS_SUCCESS, 
  payload: results
});

const fetchCleanersFailure = (results) => ({
  type: FETCH_CLEANERS_FAILURE, 
  payload: results
});

const fetchCleanersPending = (filter) => ({
  type: FETCH_CLEANERS_PENDING,
  payload: filter
});

export const fetchCleaners = (criteria) => {
  return async dispatch => {
    const filter = criteria;
    dispatch(fetchCleanersPending(filter));
    try{
      if(criteria){
        console.log("criteria", criteria);
        // var {data} = await axios.get(`${SERVER_URL}/search/cleaners`,{params: criteria});
        // result = {cleaners: data, filter}
        const cleaners = await getCleaners()
        dispatch(fetchCleanersSuccess(cleaners));
      }else{
        // var {data} = await axios.get(`${SERVER_URL}/search/cleaners`);
        // const result = {cleaners: data, filter};
        const cleaners = await getCleaners()
        dispatch(fetchCleanersSuccess(cleaners));
      }
    }catch(error){
      dispatch(fetchCleanersFailure({error, filter}));
    }
    
  }
};

//MOCK API

const getCleaners = () => {
  const cleaners = 
  [
    {
      uid: "6672",
      firstName: "Rachel",
      lastName: "Ssamsk",
      phone: "6672",
      address: "Ul. donbrowska",
      isNewUser: false,
      price: 20,
      rating: 10,
      services: [
        {uid: 1, name: 'CLEANING'},
        {uid: 2, name: 'IRONING'},
        {uid: 3, name: 'WACHING'},
      ],
      languages: [
        {code: 'PL', name: 'POLISH'},
        {code: 'UK', name: 'UKRANIAN'},
        {code: 'EN', name: 'ENGLISH'},
      ],
      reviews: [
        {uid: 1, rating: 2, comment: 'poor worker', createdAt: new Date()},
        {uid: 2, rating: 10, comment: 'excellent work', createdAt: new Date()},
        {uid: 3, rating: 5, comment: 'ahhh more or less', createdAt: new Date()}
      ],
      type: 'CLEANER',
  },
    {
      uid: "6673",
      firstName: "Jhoanna",
      lastName: "Dark",
      phone: "667782",
      address: "Ul. grabiszinka",
      isNewUser: false,
      rating: 2,
      services: [
        {uid: 1, name: 'CLEANING'},
        {uid: 2, name: 'IRONING'},
        {uid: 3, name: 'WACHING'},
      ],
      languages: [
        {code: 'PL', name: 'POLISH'},
        {code: 'DE', name: 'GERMANY'},
        {code: 'EN', name: 'ENGLISH'},
      ],
      price: 100,
      type: 'CLEANER',
  },
    {
      uid: "6674",
      firstName: "Kasia",
      lastName: "Mila",
      phone: "6674",
      address: "Ul. samora",
      isNewUser: false,
      price: 70,
      rating: 8,
      services: [
        {uid: 1, name: 'CLEANING'},
        {uid: 2, name: 'IRONING'},
      ],
      languages: [
        {code: 'PL', name: 'POLISH'}
      ],
      type: 'CLEANER',
  }
]

  return returnAsPromise(cleaners);
}

const returnAsPromise = (data) => {
  return new Promise((resolve, reject)=>{
      setTimeout(() => {
          resolve(data);
      }, 1000);
  });
}