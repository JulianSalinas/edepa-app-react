// Core 
import React, { PureComponent } from 'react';

// Local 
import firebase from 'firebase';
import Layout from './Layout';
import { withMode } from '../../../theme/ThemeMode';
import { withNavigation } from 'react-navigation';


class Login extends PureComponent {

    state = {
        email: 'july12sali@hotmail.com',
        password: 'dekajuta'
    }

    login = () => {
        console.log('LOGIN PRESSED');
        firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(info => {
                console.log(info);
                this.props.navigation.navigate('Home');
            })
            .catch(error => console.log(error))
    }

    onEmailChange = email => {
        console.log('Email changed to: ', email);
        this.setState({ email });
    }

    onPasswordChange = password => {
        console.log('Password changed to: ', password);
        this.setState({ password });
    }

    render() {
        return <Layout 
            {...this.props} 
            login={this.login} 
            email={this.state.email}
            password={this.state.password}
            onEmailChange={this.onEmailChange}
            onPasswordChange={this.onPasswordChange}
        />
    }

}

export default withNavigation(withMode(Login, true));