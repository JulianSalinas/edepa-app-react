// Core
import firebase from 'firebase/app';
import React, { PureComponent } from 'react';

// Local
import AppContext from './AppContext';
import DarkPalette from '../theme/DarkPalette';
import LightPalette from '../theme/LightPalette';
import { READ, UPDATE, DELETE } from '../constants/Actions';

/**
 * ? All data shared across the app should be here 
 */
const initialState = {
    darkMode: true,
    palette: require('../theme/DarkPalette').default
}

/**
 * Provides a centralized means to access information 
 */
export class AppProvider extends PureComponent {

    state = initialState;

    constructor(props) {
        super(props);
        this.database = firebase.database().ref('edepa6');
    }

    watchUser = callback => {
        // The user always is supposed to be logged here 
        const uid = firebase.auth().currentUser.uid;
        this.database.child('users').child(uid).once('value', snapshot => callback(snapshot.val()));
    }

    watchHome = callback => {
        this.database.child('congress').once('value', snapshot => callback(snapshot.val()));
    }

    synchList = (name, receive) => {
        const reference = this.database.child(name);
        const callback = action => this.createSynchCallback(action, receive);
        reference.on('child_changed', callback(UPDATE));
        reference.on('child_removed', callback(DELETE));
        return { reference, callback };
    }

    syncPeople = receive => {
        const { reference, callback } = this.synchList('people', receive);
        reference.orderByChild('completeName').on('child_added', callback(READ));
    }

    syncNews = receive => {
        const { reference, callback } = this.synchList('news', receive);
        reference.orderByChild('time').on('child_added', callback(READ));
    }

    stopSync = name => {
        this.database.child(name).off();
    }

    /**
     * @param {string} action, it could be READ, UPDATE, DELETE
     * @param {function} receive, function from the app to receive the data back
     * @returns {function({ key, val }): * }
     */
    createSynchCallback(action, receive) {
        return snapshot => receive(snapshot.key, snapshot.val(), action);
    }

    changeDarkMode = value => this.setState({
        darkMode: value,
        palette: value ? DarkPalette : LightPalette
    })

    getActions = () => ({
        watchUser: this.watchUser,
        watchHome: this.watchHome,
        stopSych: this.stopSync,
        syncPeople: this.syncPeople,
        syncNews: this.syncNews,
        changeDarkMode: this.changeDarkMode
    })

    render() {
        return (
            <AppContext.Provider value={{ ...this.state, actions: this.getActions() }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }

}