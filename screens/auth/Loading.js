// Core 
import React, { PureComponent } from 'react';

// Local 
import Indicator from '../loading/Indicator';
import { withMode } from '../../theme/ThemeMode';

import firebase from 'firebase';
import { withNavigation } from 'react-navigation';


class Loading extends PureComponent {

    componentDidMount() {
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.props.navigation.navigate('Home')
            }
            else {
                this.props.navigation.navigate('Login')
            }
        })
    }

    render() {
        return <Indicator />
    }

}

export default withNavigation(withMode(Loading, true));