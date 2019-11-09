import React from 'react';

import Home from '../screens/home/Home';
import Settings from '../screens/settings/Settings';
import Schedule from '../screens/schedule/Schedule';
import News from '../screens/news/News';
import People from '../screens/people/People';
import Loading from '../screens/auth/Loading';
import DrawerContent from './DrawerContent';

import { Platform, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons, Feather, Entypo, AntDesign, MaterialIcons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import DefaultTheme from '../theme/LightPalette';
import { opacityFor } from '../scripts/Color';
import { withContext } from '../app/AppContext';

const ScheduleStack = createStackNavigator({
    Schedule: {
        screen: Schedule,
    }
}, {
    headerMode: 'none',
})

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
    }
}, {
    headerMode: 'none'
})

const PeopleStack = createStackNavigator({
    People: {
        screen: People,
    }
}, {
    headerMode: 'none'
})

const HomeScreen = {
    screen: Loading,
    navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
            <AntDesign size={24} name={'home'} color={tintColor} />
    }
}

const NewsScreen = {
    screen: News,
    navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
            <Entypo size={24} name={'documents'} color={tintColor} />
    }
}

const ScheduleScreen = {
    screen: ScheduleStack,
    navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
            <SimpleLineIcons size={24} name={'graduation'} color={tintColor} />
    }
}

const PeopleScreen = {
    screen: People,
    navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
            <SimpleLineIcons size={24} name={'people'} color={tintColor} />
    }
}

const SettingsScreen = {
    screen: News,
    navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
            <Feather size={24} name={'settings'} color={tintColor} />
    }
}

const BottomNavigation = createMaterialBottomTabNavigator({
    Home: HomeScreen,
    News: NewsScreen,
    Schedule: ScheduleScreen,
    People: PeopleScreen,
    Settings: SettingsScreen
}, {
    initialRouteName: 'Schedule',
    defaultNavigationOptions: props => BottomNavigationOptions(props)
})

const BottomNavigationOptions = ({ screenProps }) => ({
    activeColor: screenProps.darkMode ? '#FFF' : screenProps.palette.primary,
    inactiveColor: screenProps.palette.fontColor,
    barStyle: NavigationColor(screenProps.palette)
})

/**
 * TODO: Create Custom Content Component
 */
const DrawerNavigation = createDrawerNavigator({
    Dashboard: BottomNavigation,
    Settings: {
        screen: News,
        navigationOptions: {
            drawerIcon: ({ tintColor }) =>
                <Feather size={24} name={'settings'} color={tintColor} />
        }
    }
}, {
    initialRouteName: 'Dashboard',
    contentComponent: props => <DrawerContent {...props} />
})

const NavigationColor = palette => ({
    backgroundColor:
        typeof (palette.background) === 'string' ?
            palette.background :
            palette.background[0]
})

export default DrawerNavigation;