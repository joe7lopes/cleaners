import { createStackNavigator } from 'react-navigation';
import  { Search, SearchFilter, CleanerDetail } from '../../../../screens/search';
import {color} from '../../../styles';

const navigationBarTheme = {
  headerStyle: {
    backgroundColor: color.primary,
  },
  headerTintColor: '#fff'
};

const searchStack = createStackNavigator({
    search: {
        screen: Search,
        navigationOptions: {
            headerTitle: 'Seach',
            ...navigationBarTheme
        }
    },
    filter: {
        screen: SearchFilter,
        navigationOptions: {
            headerTitle: 'Filter',
            ...navigationBarTheme
        }
    },
    cleanerDetail: {
        screen: CleanerDetail,
        navigationOptions: {
            ...navigationBarTheme
        }
    }
});

export default searchStack;