// Core 
import React from 'react';

// Local 
import Drawer from './DrawerContent';
import Home from '../screens/home/Home';
import News from '../screens/news/News';
import People from '../screens/people/People';
import Loading from '../screens/auth/Loading';
import Schedule from '../screens/schedule/Schedule';

// Libs 
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Feather, Entypo, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// Constants 
const INITIAL_ROUTE = 'People';


const StackOptions = (name, icon) => ({
    headerMode: 'none',
    navigationOptions: { tabBarLabel: name, tabBarIcon: icon }
})

const HomeIcon = ({ tintColor }) => 
    <AntDesign 
        size={24} 
        name={'home'} 
        color={tintColor} 
    />

const HomeStack = createStackNavigator({
    Home,
}, StackOptions('Inicio', HomeIcon))

const NewsIcon = ({ tintColor }) =>
    <Entypo 
        size={24} 
        name={'documents'}
        color={tintColor} 
    />

const NewsStack = createStackNavigator({
    News,
}, StackOptions('Noticias', NewsIcon))

const ScheduleIcon = ({ tintColor }) =>
    <SimpleLineIcons 
        size={24} 
        name={'graduation'} 
        color={tintColor} 
    />

const ScheduleStack = createStackNavigator({
    Schedule,
}, StackOptions('Cronograma', ScheduleIcon))

const PeopleIcon = ({ tintColor }) =>
    <SimpleLineIcons 
        size={24} 
        name={'people'} 
        color={tintColor} 
    />

const PeopleStack = createStackNavigator({
    People,
}, StackOptions('Expositores', PeopleIcon))

const SettingsIcon = ({ tintColor }) =>
    <Feather 
        size={24} 
        name={'settings'} 
        color={tintColor} 
    />

const SettingsStack = createStackNavigator({
    People,
}, StackOptions('Opciones', SettingsIcon))


const BottomNavigation = createMaterialBottomTabNavigator({
    Home: HomeStack,
    News: NewsStack,
    Schedule: ScheduleStack,
    People: PeopleStack,
    Settings: SettingsStack
}, {
    initialRouteName: INITIAL_ROUTE,
    defaultNavigationOptions: props => BottomNavigationOptions(props)
})

const BottomNavigationOptions = ({ screenProps }) => ({
    activeColor: screenProps.darkMode ? '#FFF' : screenProps.palette.primary,
    inactiveColor: screenProps.palette.fontColor,
    barStyle: NavigationColor(screenProps.palette)
})

const NavigationColor = ({ background }) => ({
    backgroundColor: typeof (background) === 'string' ? background : background[0]
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


export default DrawerNavigation;