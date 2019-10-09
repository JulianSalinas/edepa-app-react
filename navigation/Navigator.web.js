import Loading from '../screens/loading/Loading';

import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';

const routes = {
    // Loading: Loading,
    Login: LoginScreen
}

export default createAppContainer(
    createSwitchNavigator(routes), { history: 'hash' }
)
