import React from 'react';
import { Provider } from 'react-redux';
import ApplicationNavigator  from './config/routes';
import store from './config/store';


export default App = () => (
  <Provider store={store}>
    <ApplicationNavigator />
  </Provider>
);

// import Step1 from './screens/onboarding/cleaner/Step1';

// export default App = () => (
//     <Provider store={store}>
//       <Step1 />
//     </Provider>
//   );