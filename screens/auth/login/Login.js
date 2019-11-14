// Core 
import React, { PureComponent } from 'react';

// Libs 
import firebase from 'firebase/app';
import environment from '../../../environment';
const { googleAuthConfig } = environment();

import * as Google from 'expo-google-app-auth';
import { Platform } from '@unimodules/core';
import { withNavigation } from 'react-navigation';

// Local 
import Layout from './Layout';
import Indicator from '../../loading/Indicator';
import { withMode } from '../../../theme/ThemeMode';


class Login extends PureComponent {

    state = {
        email: '',
        password: '',
        isLogging: false
    }

    onEmailChange = email => {
        this.setState({ email });
    }

    onPasswordChange = password => {
        this.setState({ password });
    }

    signup = () => {
        console.log('Sign Up');
    }

    login = type => () => {
        this.setState({ isLogging: true }, () => this.handleLogin(type));
    }

    handleLogin = type => {
        if (type === 'Google' && Platform.OS === 'web') return this.byPassLogin();
        const signIn = type === 'Email' ? this.signInWithEmailAndPassword : this.signInWithGoogle;
        return signIn();
    }

    byPassLogin = () => {
        const logged = () => this.props.navigation.navigate('Home');
        return this.setState({ isLogging: false }, logged);
    }

    signInWithEmailAndPassword = () => {
        firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Home'))
            .catch(this.signInError);
    }

    signInWithGoogle = () => {
        Google.logInAsync({ ...googleAuthConfig, scopes: ['profile', 'email'] })
            .then(this.signInWithGoogleResult)
            .catch(this.signInError);
    }

    signInWithGoogleResult = ({ type, idToken, accessToken }) => {
        if (type === 'success') {
            const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
            this.signInWithCredential(credential);
        }
        else console.log('Google Login does not work', type);
    }

    signInWithCredential = credential => {
        firebase.auth()
            .signInWithCredential(credential)
            .then(() => this.props.navigation.navigate('Home'))
            .catch(this.signInError);
    }

    signInError = error => {
        this.setState({ isLogging: false }, () => console.warn(error));
    }

    render() {
        return this.state.isLogging ? <Indicator /> : <Layout
            {...this.props}
            login={this.login}
            signup={this.signup}
            isLogging={this.isLogging}
            email={this.state.email}
            password={this.state.password}
            onEmailChange={this.onEmailChange}
            onPasswordChange={this.onPasswordChange}
        />
    }

}

export default withNavigation(withMode(Login, true));