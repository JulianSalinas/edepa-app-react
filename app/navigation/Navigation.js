import React from 'react';

import Home from '../../screens/home/Home';
import Settings from '../../screens/settings/Settings';
import Schedule from '../../screens/schedule/Schedule';
import News from '../../screens/news/News';
import Loading from '../../screens/auth/Loading';
import Colors from '../../app/theme/Theme';

import { Platform, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons, Feather, Entypo, AntDesign, MaterialIcons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import Theme from '../../app/theme/Theme';
import { opacityFor } from '../../scripts/Color';

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

const BottomNavigation = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ theme, navigation, ...props }) => {

            return {

                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return <AntDesign
                        size={24}
                        name={'home'}
                        color={tintColor}
                    />
                }
            }
        }
    },
    News: {
        screen: News,
        navigationOptions: ({ theme, navigation, ...props }) => {

            return {
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return <Entypo
                        size={24}
                        name={'documents'}
                        color={tintColor}
                    />
                }
            }
        }
    },
    Schedule: {
        path: 'schedule',
        screen: ScheduleStack,
        navigationOptions: ({ theme, navigation, ...props }) => {

            return {
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return <SimpleLineIcons
                        size={24}
                        name={'graduation'}
                        color={tintColor}
                    />
                }
            }
        }
    },
    People: {
        screen: Loading,
        navigationOptions: ({ theme, navigation, ...props }) => {

            return {
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return <SimpleLineIcons
                        size={24}
                        name={'people'}
                        color={tintColor}
                    />
                }
            }
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: ({ theme, navigation, ...props }) => {

            return {
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return <Feather
                        size={24}
                        name={'settings'}
                        color={tintColor}
                    />
                }
            }
        }
    }
}, {
    initialRouteName: 'Schedule', 
    defaultNavigationOptions: props => {

        const darkMode = props.theme === 'dark';
        const activeColor = darkMode ? '#FFF' : Theme.primary
        const inactiveColor = opacityFor(Theme.fontOpacity, darkMode)

        return {
            activeColor,
            inactiveColor,
            barStyle: {
                backgroundColor: darkMode ?
                    typeof (Theme.darkBackground) === 'string' ?
                        Theme.darkBackground : Theme.darkBackground[0] : '#FFF'
            }
        }
    }
})


const DrawerNavigation = createDrawerNavigator({
    Dashboard: {
        screen: BottomNavigation
    }
})

export default DrawerNavigation;