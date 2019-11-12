// Core 
import React, { PureComponent } from 'react';

// Local 
import firebase from 'firebase';
import Layout from './Layout';
import { withMode } from '../../../theme/ThemeMode';
import { withNavigation } from 'react-navigation';


class Login extends PureComponent {

    state = {
        email: 'july12sali@gmail.com',
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

    render() {
        return <Layout {...this.props} login={this.login} />
    }

}

export default withNavigation(withMode(Login, true));