import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Controller from './src/app/Controller';
import { AppLoading, Asset, Font, Icon } from 'expo';
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
        ...Icon.Ionicons.font,
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("native-base/Fonts/Ionicons.ttf")
    }

    loading = () => <AppLoading
        startAsync={this.loadResources}
        onError={console.warn}
        onFinish={() => this.setState({ isLoadingComplete: true })}
    />;

    started = () => <View style={this.styles}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
        <Controller/>
    </View>;

    loadResources = async () => {
        const fonts = Font.loadAsync(this.fonts);
        const assets = Asset.loadAsync(this.assets);
        return Promise.all([fonts, assets]);
    };

    render() {
        const condition = !this.state.isLoadingComplete && !this.props.skipLoadingScreen;
        return condition ? this.loading() : this.started();
    }

}
