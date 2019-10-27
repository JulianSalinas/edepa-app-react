// Libs 
import { createBrowserApp } from '@react-navigation/web';
import { SwitchRouter, createNavigator } from '@react-navigation/core';

// Local 
import Navigation from './Navigation';
import Loading from '../../screens/auth/Loading';
import Login from '../../screens/auth/login/Login';

const AppNavigator = createNavigator({
    // Loading: Loading,
    // Login: Login,
    Navigation: Navigation
})

export default createBrowserApp(
    createNavigator(AppNavigator)
)