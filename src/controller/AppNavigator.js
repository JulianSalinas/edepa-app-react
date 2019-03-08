import React from 'react';
import Icons from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import PeopleScreen from '../screens/PeopleScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EventScreen from '../screens/EventScreen';

import { withTheme} from 'react-native-elements';
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

const HomeStack = createStackNavigator({
    HomeScreen,
});

HomeStack.navigationOptions = {
    title: 'Inicio',
    tabBarIcon: tabBarIconFeather('home')
};

const NewsStack = createStackNavigator({
    NewsScreen,
});

NewsStack.navigationOptions = {
    title: 'Noticias',
    tabBarIcon: tabBarIconEntypo('news')
};

const PeopleStack = createStackNavigator({
    PeopleScreen,
});

PeopleStack.navigationOptions = {
    title: 'Expositores',
    tabBarIcon: tabBarIconLineIcons('people')
};

const ScheduleStack = createStackNavigator({
    ScheduleScreen,
});

ScheduleStack.navigationOptions = {
    title: 'Eventos',
    tabBarIcon: tabBarIconFeather('calendar')
};

const SettingsStack = createStackNavigator({
    SettingsScreen,
});

SettingsStack.navigationOptions = {
    title: 'Config',
    tabBarIcon: tabBarIconIonicons('ios-options')
};

export default withTheme(props => {

    const NavigatorRoutes = {
        HomeStack,
        NewsStack,
        ScheduleStack,
        PeopleStack,
        SettingsStack
    };

    // Navigation options are for each screen in Navigator
    const NavigatorOptions = {
        initialRouteName: 'ScheduleStack',
        barStyle: { backgroundColor: '#FFF' },
        activeColor: props.theme.colors.primary
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
        NavigatorScreen,
        EventScreen
    });

    const Component = createAppContainer(createSwitchNavigator({
        // Login or details screens go here.
        MainScreen
    }));

    return <Component/>;

});