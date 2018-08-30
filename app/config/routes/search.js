import { createStackNavigator } from 'react-navigation';
import  { Search, CleanerDetail } from '../../screens/search';
const searchStack = createStackNavigator({
  search:{
    screen: Search,
    navigationOptions: {
      headerTitle: 'Seach Cleaner'
    }
  },
  cleanerDetail:{
    screen: CleanerDetail,
    navigationOptions: {
      headerTitle: 'cleaner detail'
    }
  }
});

export default searchStack;