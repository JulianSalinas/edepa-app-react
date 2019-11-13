// Core 
import React from 'react';

// Libs
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';

// Local 
import { withContext } from './AppContext';
import Flow from '../screens/auth/Flow';
import Login from '../screens/auth/login/Login';
import DrawerNavigation from './DrawerNavigator';

const routes = {
    Flow,
    Login,
    Navigation: DrawerNavigation
}

const AppContainer = createAppContainer(
    createSwitchNavigator(routes)
)

export default withContext(props => <AppContainer theme={props.darkMode ? 'dark' : 'light'} screenProps={props} />)
