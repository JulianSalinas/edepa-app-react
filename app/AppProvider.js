// Core
import firebase from 'firebase/app';
import React, { PureComponent } from 'react';

// Local
import AppContext from './AppContext';

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

    watchHome = callback => {
        this.database.child('congress').once('value', snapshot => callback(snapshot.val()));
    }

    changeDarkMode = value => this.setState({
        darkMode: value,
        palette: require(`../theme/${value ? 'Dark' : 'Light'}Palette`).default
    })

    // onValueRead = (key, value) => this.setState(state => ({
    //     [key]: value
    // }))

    // onItemRead = (key, value) => this.setState(state => ({
    //     [key]: [...state[key], value]
    // }))

    // onItemUpdated = (key, value) => this.setState(state => ({
    //     [key]: state[key].map(old => old.key === key ? value : old)
    // }))

    // onItemDeleted = (key, value) => this.setState(state => ({
    //     [key]: state[key].filter(item => item.key !== value.key)
    // }))

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