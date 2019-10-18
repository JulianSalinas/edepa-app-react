// Libs 
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';

// Local 
import { 
    // HomeScreen,
    // LoadingScreen,
    LoginScreen,
    // NewsScreen,
    // PeopleScreen,
    // ScheduleScreen,
    // SettingsScreen,
    // TestScreen,
} from './Screens';

const routes = {
    // Home: HomeScreen,
    // Loading: LoadingScreen,
    Login: LoginScreen,
    // News: NewsScreen,
    // People: PeopleScreen,
    // Schedule: ScheduleScreen,
    // Settings: SettingsScreen,
    // Test: TestScreen
}


export default createAppContainer(
    createSwitchNavigator(routes), { history: 'hash' }
)