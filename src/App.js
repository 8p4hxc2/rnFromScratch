import { createBottomTabNavigator } from 'react-navigation';
import { home, login } from './screens';

export default createBottomTabNavigator({
  Home: home,
  Login: login,
});