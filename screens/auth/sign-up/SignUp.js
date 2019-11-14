// Core 
import React, { PureComponent } from 'react';

// Libs 
import firebase from 'firebase/app';
import environment from '../../../environment';
const { googleAuthConfig } = environment();
import { withNavigation } from 'react-navigation';

// Local 
import Layout from './Layout';
import Indicator from '../../loading/Indicator';
import { withMode } from '../../../theme/ThemeMode';


class SignUp extends PureComponent {

    state = {
        email: '',
        password: '',
        confirmation: '',
        isLoading: false
    }

    onEmailChange = email => {
        this.setState({ email });
    }

    onPasswordChange = password => {
        this.setState({ password });
    }

    onConfirmationChange = confirmation => {
        this.setState({ confirmation });
    }

    signUp = () => {
        if (this.state.password !== this.state.confirmation){
            // TODO Incorrect 
        }
        else {
            firebase.auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(this.handleSignUp)
                .catch(this.signInError);
        }
    }

    back = () => {
        this.props.navigation.navigate('Login');
    }

    handleSignUp = () => {
        this.setState({ isLoading: false }, () => this.props.navigation.navigate('Home'));
    }

    signInError = error => {
        this.setState({ isLoading: false }, () => console.warn(error));
    }

    render() {
        return this.state.isLoading ? <Indicator /> : <Layout
            back={this.back}
            signUp={this.signUp}
            email={this.state.email}
            password={this.state.password}
            confirmation={this.state.confirmation}
            onEmailChange={this.onEmailChange}
            onPasswordChange={this.onPasswordChange}
            onConfirmationChange={this.onConfirmationChange}
        />
    }

}

export default withNavigation(withMode(SignUp, true));