import * as AuthActions from './auth_action';
import * as UserActions from './user_action';
import * as SearchActions from './client_search__action';
import * as OfferActions from './client_offer_actions';

export const ActionCreators = Object.assign({},
  AuthActions,
  UserActions,
  SearchActions,
  OfferActions
);