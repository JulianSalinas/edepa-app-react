import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AppNavigator from './navigation/Navigator';

import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Platform, StatusBar, View } from 'react-native';


export default class App extends Component {

    static propTypes = {
        skipLoadingScreen: PropTypes.bool
    };

    state = {
        isLoadingComplete: false,
    };

    styles = {
        flex: 1,
        backgroundColor: '#fff'
    };

    assets = [
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
    ];

    fonts = {
        ...Ionicons.font,
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("native-base/Fonts/Ionicons.ttf")
    };

    loadResources = async () => {
        const fonts = Font.loadAsync(this.fonts);
        const assets = Asset.loadAsync(this.assets);
        await Promise.all([fonts, assets]);
    };

    loading = () => <AppLoading
        startAsync={this.loadResources}
        onError={console.warn}
        onFinish={() => this.setState({ isLoadingComplete: true })}
    />;

    started = () => <View style={this.styles}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
        <AppNavigator />
    </View>;

    render(){
        const condition = !this.state.isLoadingComplete && !this.props.skipLoadingScreen;
        return condition ? this.loading() : this.started();
    }

}