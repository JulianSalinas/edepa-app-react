// Libs 
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';

// Local 
import { 
    LoadingScreen,
    LoginScreen,
    PeopleScreen,
    ScheduleScreen,
    SettingsScreen
} from './Screens';

const routes = {
    // Loading: LoadingScreen,
    // Login: LoginScreen,
    // People: PeopleScreen,
    Schedule: ScheduleScreen,
    // Settings: SettingsScreen
}


export default createAppContainer(
    createSwitchNavigator(routes), { history: 'hash' }
)