// Core 
import React, { PureComponent } from 'react';

// Libs 
import { Platform, SafeAreaView } from 'react-native';

// Local 
import Firebase from '../services/Firebase';
import Container from './navigation/Container';


export default class Main extends PureComponent {

    static COMMAND_COUNT = 0;
    static DEBUG_DARK_MODE = true;

    /**
     * Contains all the information that can be used 
     * along the app.
     * TODO: Remove these list when implemented in their views 
     */
    state = {
        people: [],
        events: [],
        darkMode: Platform.OS === 'web'
    }

    /**
     * Gets ready the Database connection
     * TODO: Active database
     */
    constructor(props) {
        super(props);
        this.database = new Firebase();
        this.print('APP STARTED');
    }

    /**
     * Adjusts the app's appearance to dark or light mode 
     */
    changeDarkMode = value => {
        return this.setState({ darkMode: value }, this.darkModeChanged);
    }

    darkModeChanged = () => {
        this.print(`DARK MODE ${this.state.darkMode ? 'ON' : 'OFF'}`);
    }

    /**
     * Activates listeners to update the state according 
     * to the database 
     * TODO: Active database listeners 
     */
    componentDidMount() {
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
        [list]: state[list].map(old => old.key === key ? item : old)
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
    synchList = listName => (key, item, action) => {
        item.key = key;
        action === Firebase.READ ? this.onItemRead(listName, item) :
            action === Firebase.DELETE ? this.onItemDeleted(listName, item) :
                this.onItemUpdated(listName, item);
    }

    /**
     * All the functions that can be used along the app
     * to change the look and feel must be here 
     */
    getStore = () => ({
        people: this.state.people,
        events: this.state.events
    })

    getMode = () => ({
        darkMode: this.state.darkMode,
        changeDarkMode: this.changeDarkMode
    })

    print = message => {
        Main.COMMAND_COUNT += 1;
        const output = `%c[${Main.COMMAND_COUNT}]: %c${message}`;
        console.log(output, 'color: DodgerBlue', 'color: Purple');
    }

    /**
     * Renders the entire app passing its state to make it available
     * for each component
     */
    render() {

        const params = {
            mode: this.getMode(),
            store: this.getStore()
        };

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Container screenProps={params} theme={this.state.darkMode ? 'dark' : 'light'} />
            </SafeAreaView>
        )

    }

}