import React from 'react';
import { Provider } from 'react-redux';
import ApplicationNavigator  from './config/routes';
import store from './config/store';

export default App = () => (
  <Provider store={store}>
    <ApplicationNavigator />
  </Provider>
);


//USED FOR DEVELOPMENT

// import {logout} from './actions/auth_action';
//
// store.dispatch(logout());

// import Account from './screens/account/Account';
//
// export default App = () => (
//     <Provider store={store}>
//       <Account />
//     </Provider>
//   );