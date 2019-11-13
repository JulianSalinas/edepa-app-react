// Core 
import React, { PureComponent } from 'react';

// Libs 
import firebase from 'firebase';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';

//Local 
import Flat from '../colors/Flat';
import JButton from '../shared/JButton';


class DrawerFooter extends PureComponent {

    logOut = () => {
        firebase.auth().signOut().then(this.onLogOut);
    }

    onLogOut = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={{ padding: 32 }}>
                <JButton
                    text={'CERRAR SESIóN'}
                    color={Flat.POMEGRANATE}
                    onClick={this.logOut}
                />
            </View>
        )
    }

}

export default withNavigation(DrawerFooter);