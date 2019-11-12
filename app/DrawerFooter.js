// Core 
import React, { PureComponent } from 'react';

// Libs 
import firebase from 'firebase';
import { Button, View } from 'react-native';
import { withNavigation } from 'react-navigation';

//Local 
import Flat from '../colors/Flat';


class DrawerFooter extends PureComponent {

    logOut = () => {
        firebase.auth().signOut().then(this.onLogOut);
    }

    onLogOut = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={{ padding: 16 }}>
                <Button 
                    title={'CERRAR SESIóN'} 
                    color={Flat.POMEGRANATE}
                    onPress={this.logOut}
                />
            </View>
        )
    }

}

export default withNavigation(DrawerFooter);