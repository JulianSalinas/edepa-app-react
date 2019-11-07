// Core
import firebase from 'firebase/app';
import React, { PureComponent } from 'react';

// Local
import theme from '../theme/Theme';
import AppContext from './AppContext';

/**
 * ? All data shared across the app should be here 
 */
const initialState = {
    theme: theme,
    darkMode: true
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

    changeDarkMode = value => this.setState({
        darkMode: value
    })

    onValueRead = (key, value) => this.setState(state => ({
        [key]: value
    }))

    onItemRead = (key, value) => this.setState(state => ({
        [key]: [...state[key], value]
    }))

    onItemUpdated = (key, value) => this.setState(state => ({
        [key]: state[key].map(old => old.key === key ? value : old)
    }))

    onItemDeleted = (key, value) => this.setState(state => ({
        [key]: state[key].filter(item => item.key !== value.key)
    }))

    // synchList = name => (key, item, action) => {

    // }

    // synchObject = name => (key, item, action) => {

    // }

    // watchPersonData = () => {
    // firebase.database().ref("person").on("value", function (snapshot) {
    //     var personData = snapshot.val();
    //     this.setPersonData(personData);
    // }.bind(this), function (error) { });
    // }

    watchHome = callback => {
        this.database.child('congress').once('value', snapshot => callback(snapshot.val()));
    } 

    getActions = () => ({
        watchHome: this.watchHome,
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