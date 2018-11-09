import { createStackNavigator } from 'react-navigation';
import  { Search, CleanerDetail } from '../../../../screens/search';
import {color} from '../../../styles';

const navigationBarTheme = {
  headerStyle: {
    backgroundColor: color.primary,
  },
  headerTintColor: '#fff'
};

const searchStack = createStackNavigator({
  search:{
    screen: Search,
    navigationOptions: {
      headerTitle: 'Seach',
      ...navigationBarTheme
    }
  },
  cleanerDetail:{
    screen: CleanerDetail,
    navigationOptions: {
      ...navigationBarTheme
    }
  }
});

export default searchStack;