// Libs 
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from '@react-navigation/core';

// Local 
import Navigation from './Navigation';
import Loading from '../../screens/auth/Loading';
import Login from '../../screens/auth/login/Login';
import Schedule from '../../screens/schedule/Schedule';

const routes = {
    // Loading: Loading,
    // Login: Login,
    Navigation: Navigation
}

export default createAppContainer(
    createSwitchNavigator(routes), { history: 'hash' }
)