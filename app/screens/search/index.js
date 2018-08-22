
import store from '../../config/store';
import  SearchCleaner from './client/SearchCleaner';
import { CLEANER, CLIENT } from '../../config/profileTypes';

const profile = (profileType) => {
  if(profileType === CLIENT){
    return SearchCleaner;
  }
}

//TODO, get the value from the store.
export default profile('client');