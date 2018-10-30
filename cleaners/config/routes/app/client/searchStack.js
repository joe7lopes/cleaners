import { createStackNavigator } from 'react-navigation';
import  { Search, CleanerDetail } from '../../../../screens/search';

const searchStack = createStackNavigator({
  search:{
    screen: Search,
    navigationOptions: {
      headerTitle: 'Seach'
    }
  },
  cleanerDetail:{
    screen: CleanerDetail
  }
});

export default searchStack;