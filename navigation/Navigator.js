import Loading from '../screens/loading/Loading';
import LoginScreen from '../screens/login/LoginScreen';
import PeopleScreen from '../screens/people/PeopleScreen';
import ScheduleScreen from '../screens/schedule/ScheduleScreen';

import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';

const routes = {
    // Loading: Loading,
    // Login: LoginScreen,
    // People: PeopleScreen
    Schedule: ScheduleScreen
}

export default createAppContainer(
    createSwitchNavigator(routes)
);
