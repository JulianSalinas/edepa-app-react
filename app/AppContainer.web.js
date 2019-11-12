// Core 
import React from 'react';

// Libs 
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from '@react-navigation/core';

// Local 
import { withContext } from './AppContext';
import Login from '../screens/auth/login/Login';
import Loading from '../screens/auth/Loading';
import DrawerNavigation from './DrawerNavigator';

const routes = {
    Loading,
    Login,
    Navigation: DrawerNavigation
}

const AppContainer = createAppContainer(
    createSwitchNavigator(routes), { history: 'hash' }
)

export default withContext(props => <AppContainer theme={props.darkMode ? 'dark' : 'light'} screenProps={props} />)