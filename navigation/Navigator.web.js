import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/login/LoginScreen';
import PeopleScreen from '../screens/people/PeopleScreen';

import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

const routes = {
    Login: LoginScreen,
    // Main: TabNavigator, 
    People: PeopleScreen
}

const SwitchNavigator = createSwitchNavigator(routes);

const WebNavigator = createBrowserApp(SwitchNavigator, { history: 'hash' });

// export default LoginScreen;
export default WebNavigator;
