import {
  createStackNavigator,
} from 'react-navigation';
import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';
import TurnOnNotifications from '../screens/TurnOnNotifications';
import LoggedInTabNavigator from './LoggedInTabNavigator';
import WifiFunc from './../wifi/WifiFunc';

const AppRouteConfigs = createStackNavigator({
  LoggedOut: { screen: LoggedOut },
  LoggedIn: {
    screen: LoggedInTabNavigator,
    navigationOptions: {
      title:'DashBoard',
      headerLeft:null,
      //header: null,
      gesturesEnabled: false,
    },
  },
  LogIn: { screen: LogIn },
  wifi: { screen: WifiFunc },
  ForgotPassword: { screen: ForgotPassword },
  TurnOnNotifications: { screen: TurnOnNotifications },
});

export default AppRouteConfigs;
