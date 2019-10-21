import React from 'react';

import Home from '../../screens/home/Home';
import Settings from '../../screens/settings/Settings';
import Schedule from '../../screens/schedule/Schedule';
import News from '../../screens/news/News';

import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';

function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? '#E74C3C' : '#2C3E50'}
    />
  )
}

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator({ Home }, config );

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const SettingsStack = createStackNavigator({ Settings }, config );

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';


const ScheduleStack = createStackNavigator({ Schedule }, config );

ScheduleStack.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
  ),
};

ScheduleStack.path = '';

const NewsStack = createStackNavigator({ News }, config );

NewsStack.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
  )
};

NewsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SettingsStack,
  NewsStack,
  ScheduleStack,
});

tabNavigator.path = '';

export default tabNavigator;
