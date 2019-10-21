// Core 
import React from 'react';

// Local 
import { ScreenTypes } from '../app/Types';
import Home from './home/Home';
import Loading from './loading/Loading';
import Login from './login/Login';
import News from './news/News';
import People from './people/People';
import Settings from './settings/Settings';
import Schedule from './schedule/Schedule';
import Test from './test/Test';

const HomeScreen = props => <Home
    darkMode={props.screenProps.look.darkMode} 
/>

HomeScreen.propTypes = ScreenTypes;

const LoadingScreen = props => <Loading
    darkMode={props.screenProps.look.darkMode}
/>

LoadingScreen.propTypes = ScreenTypes;

const LoginScreen = props => <Login 
    print={props.screenProps.print}
    darkMode={props.screenProps.look.darkMode} 
/>

LoginScreen.propTypes = ScreenTypes;

const NewsScreen = props => <News
    darkMode={props.screenProps.look.darkMode} 
/>

NewsScreen.propTypes = ScreenTypes;

const PeopleScreen = props => <People
    darkMode={props.screenProps.look.darkMode} 
    people={props.screenProps.store.people}
/>

PeopleScreen.propTypes = ScreenTypes;

const SettingsScreen = props => <Settings
    darkMode={props.screenProps.look.darkMode} 
/>

SettingsScreen.propTypes = ScreenTypes;

const ScheduleScreen = props => <Schedule
    print={props.screenProps.print}
    darkMode={props.screenProps.look.darkMode} 
/>

ScheduleScreen.propTypes = ScreenTypes;

const TestScreen = props => <Test
    darkMode={props.screenProps.look.darkMode}
/>

TestScreen.propTypes = ScreenTypes;

export { 
    HomeScreen,
    LoadingScreen, 
    LoginScreen, 
    NewsScreen,
    PeopleScreen,
    SettingsScreen,
    ScheduleScreen,
    TestScreen
}