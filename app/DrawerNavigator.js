import React from 'react';

import Home from '../screens/home/Home';
import Settings from '../screens/settings/Settings';
import Schedule from '../screens/schedule/Schedule';
import News from '../screens/news/News';
import People from '../screens/people/People';
import Loading from '../screens/auth/Loading';

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

const BottomNavigation = createMaterialBottomTabNavigator({
    Home: {
        screen: Loading,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                return <AntDesign
                    size={24}
                    name={'home'}
                    color={tintColor}
                />
            }
        }
    },
    // News: {
    //     screen: News,
    //     navigationOptions: ({ theme, navigation, ...props }) => {

    //         return {
    //             tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //                 return <Entypo
    //                     size={24}
    //                     name={'documents'}
    //                     color={tintColor}
    //                 />
    //             }
    //         }
    //     }
    // },
    // Schedule: {
    //     path: 'schedule',
    //     screen: ScheduleStack,
    //     navigationOptions: ({ theme, navigation, ...props }) => {

    //         return {
    //             tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //                 return <SimpleLineIcons
    //                     size={24}
    //                     name={'graduation'}
    //                     color={tintColor}
    //                 />
    //             }
    //         }
    //     }
    // },
    // People: {
    //     screen: People,
    //     navigationOptions: ({ theme, navigation, ...props }) => {

    //         return {
    //             tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //                 return <SimpleLineIcons
    //                     size={24}
    //                     name={'people'}
    //                     color={tintColor}
    //                 />
    //             }
    //         }
    //     }
    // },
    // Settings: {
    //     screen: Settings,
    //     navigationOptions: ({ theme, navigation, ...props }) => {

    //         return {
    //             tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //                 return <Feather
    //                     size={24}
    //                     name={'settings'}
    //                     color={tintColor}
    //                 />
    //             }
    //         }
    //     }
    // }
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: props => BottomNavigationOptions(props)
})

const BottomNavigationOptions = ({ screenProps }) => ({
    activeColor: screenProps.palette.primary,
    inactiveColor: screenProps.palette.fontColor,
    barStyle: BottomNavigationColor(screenProps.palette)
})

const BottomNavigationColor = palette => ({
    backgroundColor:
        typeof (palette.background) === 'string' ?
            palette.background :
            palette.background[0]
})

const DrawerNavigation = createDrawerNavigator({
    Dashboard: {
        screen: BottomNavigation
    }
})

export default DrawerNavigation;