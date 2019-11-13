// Core 
import React, { PureComponent } from 'react';

// Libs 
import firebase from 'firebase';
import { withNavigation } from 'react-navigation';

// Local 
import Layout from './Layout';
import { withMode } from '../../../theme/ThemeMode';


class Login extends PureComponent {

    state = {
        email: '',
        password: '',
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
        if (type === 'Email') {
            firebase.auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(info => {
                    this.props.navigation.navigate('Home');
                }).catch(error => console.log(error))
        }
        else {
            console.log('Log with Google');
        }
    }

    render() {
        return <Layout
            {...this.props}
            login={this.login}
            signup={this.signup}
            email={this.state.email}
            password={this.state.password}
            onEmailChange={this.onEmailChange}
            onPasswordChange={this.onPasswordChange}
        />
    }

}

export default withNavigation(withMode(Login, true));