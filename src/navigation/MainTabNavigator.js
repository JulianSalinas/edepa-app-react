import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import PeopleScreen from '../screens/PeopleScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Ionicons, Feather, SimpleLineIcons, Entypo } from "@expo/vector-icons";

const tabBarIconIonicons = name => ({ tintColor }) =>
    <Ionicons
        size={24}
        name={name}
        color={tintColor}
    />;

const tabBarIconFeather = name => ({ tintColor }) =>
    <Feather
        size={24}
        name={name}
        color={tintColor}
    />;

const tabBarIconEntypo = name => ({ tintColor }) =>
    <Entypo
        size={24}
        name={name}
        color={tintColor}
    />;

const tabBarIconLineIcons = name => ({ tintColor }) =>
    <SimpleLineIcons
        size={24}
        name={name}
        color={tintColor}
    />;

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    title: 'Inicio',
    tabBarIcon: tabBarIconFeather('home')
};

const NewsStack = createStackNavigator({
    Links: NewsScreen,
});

NewsStack.navigationOptions = {
    title: 'Noticias',
    tabBarIcon: tabBarIconEntypo('news')
};

const PeopleStack = createStackNavigator({
    Links: PeopleScreen,
});

PeopleStack.navigationOptions = {
    title: 'Expositores',
    tabBarIcon: tabBarIconLineIcons('people')
};

const ScheduleStack = createStackNavigator({
    Links: ScheduleScreen,
});

ScheduleStack.navigationOptions = {
    title: 'Eventos',
    tabBarIcon: tabBarIconFeather('calendar')
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    title: 'Config',
    tabBarIcon: tabBarIconIonicons('ios-options')
};

const RouteConfigs = {
    HomeStack,
    NewsStack,
    ScheduleStack,
    PeopleStack,
    SettingsStack
};

const BottomTabNavigatorOptions = {
    activeColor: '#F12',
    initialRouteName: 'ScheduleStack',
    barStyle: { backgroundColor: '#FFF' }
};

export default createMaterialBottomTabNavigator(RouteConfigs, BottomTabNavigatorOptions);
