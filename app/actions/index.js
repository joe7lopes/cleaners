import * as AuthActions from './auth_action';
import * as UserActions from './user_action';
import * as SearchActions from './client_search__action';

export const ActionCreators = Object.assign({},
  AuthActions,
  UserActions,
  SearchActions
);