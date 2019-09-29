
import MainTabNavigator from './TabNavigator';
import LoginScreen from '../screens/login/LoginScreen';

import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

const switchNavigator = createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Main: MainTabNavigator,
    Login: LoginScreen,
});

switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
