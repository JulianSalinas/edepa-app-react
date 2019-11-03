// Core 
import { AppProvider } from './app/AppProvider';
import React, { PureComponent } from 'react';
import Container from './app/AppContainer';

// Firebase 
import firebase from 'firebase/app';
import environment from './environment';
const { firebaseConfig } = environment();

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

    loadFirebase = async () => {
        if (!firebase.apps.length) {
            require('firebase/database');
            firebase.initializeApp(firebaseConfig);
        }
    }

    loadResources = async () => {
        const fonts = Font.loadAsync(this.fonts);
        const assets = Asset.loadAsync(this.assets);
        await Promise.all([fonts, assets, this.loadFirebase()]);
    }

    loading = () =>
        <AppLoading
            startAsync={this.loadResources}
            onFinish={() => this.setState({ isLoadingComplete: true })}
        />

    started = () =>
        <AppProvider>
            <View style={{ flex: 1 }}>
                {Platform.OS === 'ios' && <StatusBar barStyle='dark-content' translucent />}
                <Container />
            </View>
        </AppProvider>

    render() {
        return this.state.isLoadingComplete ? this.started() : this.loading()
    }

}