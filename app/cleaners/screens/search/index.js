
import  SearchCleaner from './client/SearchCleaner';
import CleanerDetail from './client/CleanerDetail';
import { CLEANER, CLIENT } from '../../config/profileTypes';

const getSearchScreenByProfile = (profileType) => {
  if(profileType === CLIENT){
    return SearchCleaner;
  }
}

const getDetailScreenByProfile = () => {
  return CleanerDetail;
}

//TODO, get the value from the store.
const Search = getSearchScreenByProfile('client');
export {
  Search,
  CleanerDetail
}