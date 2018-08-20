import React from 'react';
import { Provider } from 'react-redux';
import ApplicationNavigator  from './config/routes';
import store from './config/store';

// export default App = () => (
//   <Provider store={store}>
//     <ApplicationNavigator />
//   </Provider>
// );

// // Used for screen preview

import CleanerProfile from './screens/profile/CleanerProfile';

export default CleanerApp = () => (
    <CleanerProfile />
);