import { createBottomTabNavigator } from 'react-navigation';
import { home, login } from '../screens';

export const Root = createBottomTabNavigator({
    Home: home,
    Login: login,
});