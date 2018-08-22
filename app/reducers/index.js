import { combineReducers } from 'redux';
import auth from './auth_reducer';
import user from './user_reducer';
import search from './client_search_reducer';
export default combineReducers({
  auth,
  user,
  search
});