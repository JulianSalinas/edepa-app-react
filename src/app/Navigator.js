import React from 'react';
import Icons from '@expo/vector-icons';

import HomeScreen from '../screens/home/HomeScreen';
import NewsScreen from '../screens/news/NewsScreen';
import PeopleScreen from '../screens/people/PeopleScreen';
import ScheduleScreen from '../screens/schedule/ScheduleScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import EventScreen from '../screens/event/EventScreen';

import withAppContext from './Context';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';


const tabBarIconIonicons = name => ({ tintColor }) =>
    <Icons.Ionicons
        size={24}
        name={name}
        color={tintColor}
    />;

const tabBarIconFeather = name => ({ tintColor }) =>
    <Icons.Feather
        size={24}
        name={name}
        color={tintColor}
    />;

const tabBarIconEntypo = name => ({ tintColor }) =>
    <Icons.Entypo
        size={24}
        name={name}
        color={tintColor}
    />;

const tabBarIconLineIcons = name => ({ tintColor }) =>
    <Icons.SimpleLineIcons
        size={24}
        name={name}
        color={tintColor}
    />;

const StackNavigatorConfig = {
    headerMode: 'none'
};

const HomeStack = createStackNavigator({
    HomeScreen
}, StackNavigatorConfig);

HomeStack.navigationOptions = {
    title: 'Inicio',
    // tabBarIcon: tabBarIconEntypo('news')
};

const NewsStack = createStackNavigator({
    NewsScreen
}, StackNavigatorConfig);

NewsStack.navigationOptions = {
    title: 'Noticias',
    // tabBarIcon: tabBarIconEntypo('news')
};

const PeopleStack = createStackNavigator({
    PeopleScreen
}, StackNavigatorConfig);

PeopleStack.navigationOptions = {
    title: 'Expositores',
    // tabBarIcon: tabBarIconLineIcons('people')
};

const ScheduleStack = createStackNavigator({
    ScheduleScreen
}, StackNavigatorConfig);

ScheduleStack.navigationOptions = {
    title: 'Eventos',
    // tabBarIcon: tabBarIconFeather('calendar')
};

const SettingsStack = createStackNavigator({
    SettingsScreen,
}, StackNavigatorConfig);

SettingsStack.navigationOptions = {
    title: 'Config',
    // tabBarIcon: tabBarIconIonicons('ios-options')
};

export default withAppContext(props => {

    const NavigatorRoutes = {
        Home: HomeStack,
        News: NewsStack,
        Schedule: ScheduleStack,
        People: PeopleStack,
        Settings: SettingsStack
    };

    // Navigation options are for each screen in Navigator
    const NavigatorOptions = {
        initialRouteName: 'Schedule',
        activeColor: props.appTheme.primary,
        inactiveColor: props.appTheme.greyFont,
        barStyle: { backgroundColor: props.appTheme.container }
    };

    const NavigatorScreen = createMaterialBottomTabNavigator(
        NavigatorRoutes,
        NavigatorOptions
    );

    // Navigation options are for Navigator itself
    NavigatorScreen.navigationOptions = {
        header: null
    };

    const MainScreen = createStackNavigator({
        Navigator: NavigatorScreen,
        Event: EventScreen
    });

    const Component = createAppContainer(createSwitchNavigator({
        // Login or details screens go here.
        MainScreen
    }));

    return <Component/>;

});