import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/login/LoginScreen';
import PeopleScreen from '../screens/people/PeopleScreen';
import Loading from '../shared/loading/Loading';
import TestScreen from '../screens/test/TestScreen';

import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

const routes = {
    // Login: LoginScreen,
    // Main: TabNavigator, 
    People: PeopleScreen
    // Loading: Loading
    // Test: TestScreen 
}

const SwitchNavigator = createSwitchNavigator(routes);
const WebNavigator = createBrowserApp(SwitchNavigator, { history: 'hash' });
export default WebNavigator;
