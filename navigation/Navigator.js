import TabNavigator from './TabNavigator';
import LoginScreen from '../screens/login/LoginScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import PeopleScreen from '../screens/people/PeopleScreen';

import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';

const screens = {
    // Login: LoginScreen,
    // Main: TabNavigator. 
    // Settings: SettingsScreen,
    People: PeopleScreen
}

const options = {
    // initialRouteName: 'Login'
}

export default createAppContainer(
    createSwitchNavigator(screens, options)
);
