import { createStackNavigator } from 'react-navigation';
import  Search from '../../screens/search';

const SearchStack = createStackNavigator({
  Search:{
    screen: Search,
    navigationOptions: {
      headerTitle: 'Seach Cleaner'
    }
  },
},
{
  mode: 'modal'
});

export default SearchStack;