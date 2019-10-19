// Core 
import Main from './app/Main';
import React, { PureComponent } from 'react';

// Libs
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Platform, StatusBar, View, YellowBox } from 'react-native';

// Ignore 
YellowBox.ignoreWarnings(['Setting a timer', 'Warning: Using the']);
console.disableYellowBox = true;


export default class App extends PureComponent {

    state = {
        isLoadingComplete: false,
    }

    assets = [
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
    ]

    fonts = {
        ...Ionicons.font,
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }

    loadResources = async () => {
        const fonts = Font.loadAsync(this.fonts);
        const assets = Asset.loadAsync(this.assets);
        await Promise.all([fonts, assets]);
    }

    loading = () =>
        <AppLoading
            startAsync={this.loadResources}
            onError={console.warn}
            onFinish={() => this.setState({ isLoadingComplete: true })}
        />

    started = () =>
        <View style={{ flex: 1 }}>
            {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
            <Main />
        </View>

    render() {
        const condition = !this.state.isLoadingComplete;
        return condition ? this.loading() : this.started();
    }

}