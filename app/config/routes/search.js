import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { SeachCleaner, CleanerDetail, CleanerRequestConfirmation } from '../../screens/search';


const SearchStack = createStackNavigator({
  Search:{
    screen: SeachCleaner,
    navigationOptions: {
      headerTitle: 'Seach Cleaner'
    }
  },
  CleanerDetail: {
    screen: CleanerDetail
  }
},
{
  mode: 'modal'
});

export default SearchStack;