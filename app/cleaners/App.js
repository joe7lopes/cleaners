import React from 'react';
import { Provider } from 'react-redux';
import ApplicationNavigator  from './config/routes';
import store from './config/store';


// export default App = () => (
//   <Provider store={store}>
//     <ApplicationNavigator />
//   </Provider>
// );

import ClientProfile from './screens/profile';

export default App = () => (
    <Provider store={store}>
      <ClientProfile />
    </Provider>
  );