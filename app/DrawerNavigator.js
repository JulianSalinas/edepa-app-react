// Core 
import React from 'react';

// Libs 
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Feather, Entypo, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// Local 
import Drawer from './DrawerContent';
import Home from '../screens/home/Home';
import News from '../screens/news/News';
import People from '../screens/people/People';
import Loading from '../screens/auth/Loading';
import Schedule from '../screens/schedule/Schedule';


const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
    }
}, {
    headerMode: 'none'
})

const NewsStack = createStackNavigator({
    Home: {
        screen: News,
    }
}, {
    headerMode: 'none'
})

const ScheduleStack = createStackNavigator({
    Schedule: {
        screen: Schedule,
    }
}, {
    headerMode: 'none',
})

const PeopleStack = createStackNavigator({
    People: {
        screen: People,
    }
}, {
    headerMode: 'none'
})

const SettingsStack = createStackNavigator({
    People: {
        screen: News,
    }
}, {
    headerMode: 'none'
})

const HomeScreen = {
    screen: HomeStack,
    navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
            <AntDesign size={24} name={'home'} color={tintColor} />
    }
}

const NewsScreen = {
    screen: NewsStack,
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
    initialRouteName: 'News',
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
    Settings: BottomNavigation
}, {
    initialRouteName: 'Dashboard',
    contentComponent: props => <Drawer {...props} />
})

const NavigationColor = palette => ({
    backgroundColor:
        typeof (palette.background) === 'string' ?
            palette.background :
            palette.background[0]
})

export default DrawerNavigation;