import React from 'react';

import Home from '../../screens/home/Home';
import Settings from '../../screens/settings/Settings';
import Schedule from '../../screens/schedule/Schedule';
import News from '../../screens/news/News';

import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';

const ScheduleStack = createStackNavigator({
    Schedule: {
        screen: Schedule,
    }
})

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
    }
})

export default HomeStack;