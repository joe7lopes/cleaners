
import store from '../../config/store';
import ClientProfile from './ClientProfile';
import CleanerProfile from './CleanerProfile';
import { CLEANER, CLIENT } from '../../config/profileTypes';

const profile = (profileType) => {
  if(profileType === CLEANER){
    return CleanerProfile;
  }else {
    return ClientProfile;
  }
}

//TODO, get the value from the store.
export default profile(CLIENT);