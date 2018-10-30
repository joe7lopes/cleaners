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

// import ClientProfile from './screens/account/ClientProfile';
// export default App = () => (
//     <Provider store={store}>
//       <ClientProfile />
//     </Provider>
//   );