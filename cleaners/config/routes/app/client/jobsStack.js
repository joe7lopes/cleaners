import { createStackNavigator } from 'react-navigation';
import Jobs from '../../../../screens/jobs';
import {screen} from '../../navigation';
const jobsStack = createStackNavigator({
  [screen.jobs]:{
    screen: Jobs,
    navigationOptions: {
      headerTitle: 'Jobs'
    }
  }
});

export default jobsStack;