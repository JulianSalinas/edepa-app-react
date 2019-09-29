import { Context } from './Context';
import React, { Component } from 'react';

import Theme from '../constants/Theme';
import Firebase from '../services/Firebase';
import Login from '../screens/login/LoginScreen';


export default class Main extends Component {
    
    /**
     * Contains all the information that can be used 
     * along the app.
     */
    state = {
        people: [],
        events: [],
        darkMode: true
    }
    
    /**
     * All the theme's properties must be here. 
     * Additionally, dark mode can be changed.
     */
    theme = {
        ...Theme, 
        darkMode: this.state.darkMode
    }
    
    /**
     * Gets ready the Database connection
     */
    constructor(props){
        super(props);
        this.database = new Firebase();
    }

    /**
     * Adjusts the app's appearance to dark or light mode 
     */
    changeDarkMode = value => this.setState({ 
        darkMode: value 
    }, () => { this.theme.darkMode = value})

    /**
     * All the functions that can be used along the app
     * must be here. Functions must be above.
     */
    engine = {
        changeDarkMode: this.changeDarkMode
    }
    
    /**
     * Activates listeners to update the state according 
     * to the database 
     * TODO: Active database listeners 
     */
    componentDidMount(){
        // this.database.synchPeople(this.synchList('people'));
        // this.database.synchEvents(this.synchList('events'));
    }

    /**
     * Deactivates all active listeners 
     */
    componentWillUnmount() {
        this.database.closeConnection();
    }
    
    /**
     * Function used by synchList
     * Adds the read item to its corresponding list
     */
    onItemRead = (list, item) => this.setState(state => ({
        [list]: [...state[list], item]
    }))

    /**
     * Function used by synchList
     * Updates an item in its corresponding list
     */
    onItemUpdated = (list, item) => this.setState(state => ({
        [list]: state[list].map(old => old.key === key ? item : old )
    }))
    
    /**
     * Function used by synchList
     * Removes and item from its corresponding list
     */
    onItemDeleted = (list, updated) => this.setState(state => ({
        [list]: state[list].filter(item => item.key !== updated.key)
    }))

    /**
     * Callback used to update items from the database 
     */
    synchList = list => (key, item, action) => {
        item.key = key; 
        action === Firebase.READ ? this.onItemRead(list, item):
        action === Firebase.DELETE ? this.onItemDeleted(list, item):
        this.onItemUpdated(list, item);
    }

    /**
     * Renders the entire app passing its state to make it available
     * for each component by using withContext HOC. 
     */
    renderApp = () => 
        <Context store={this.state} custom={this.theme} engine={this.engine}>
            <Login />
        </Context>

    /**
     * TODOL: Whatever component can be tested here.
     */
    render() {
        return this.renderApp();
    }

}