// Core 
import React, { PureComponent } from 'react';

// Libs 
import firebase from 'firebase/app';
import { withNavigation } from 'react-navigation';

// Local 
import Indicator from '../loading/Indicator';


class Flow extends PureComponent {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(this.redirect);
    }

    redirect = user => {
        this.props.navigation.navigate(user ? 'Home' : 'Login');
    }

    render() {
        return <Indicator />
    }

}

export default withNavigation(Flow);