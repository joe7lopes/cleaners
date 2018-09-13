import React from 'react';
import { Provider } from 'react-redux';
import ApplicationNavigator  from './config/routes';
import store from './config/store';


export default App = () => (
  <Provider store={store}>
    <ApplicationNavigator />
  </Provider>
);

// import Offer from './screens/offer';

// export default App = () => (
//     <Provider store={store}>
//       <Offer />
//     </Provider>
//   );