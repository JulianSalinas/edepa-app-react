// Libs
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';

// Local 
import Navigation from './Navigation';
import Loading from '../../screens/auth/Loading';
import Login from '../../screens/auth/login/Login';

const routes = {
    // Loading: Loading,
    // Login: Login,
    Navigation: Navigation
}

export default createAppContainer(
    createSwitchNavigator(routes)
);
