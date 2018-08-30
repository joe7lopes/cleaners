import React from 'react';
import { Provider } from 'react-redux';
import ApplicationNavigator  from './config/routes';
import store from './config/store';


// export default App = () => (
//   <Provider store={store}>
//     <ApplicationNavigator />
//   </Provider>
// );

import ContactCleaner from './screens/search/client/ContactCleaner';

export default App = () => (
    <Provider store={store}>
      <ContactCleaner />
    </Provider>
  );