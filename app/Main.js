// Core 
import React, { PureComponent } from 'react';

// Libs 
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

// Local 
import { ThemeValues } from './Theme';
import Firebase from '../services/Firebase';
import Navigator from '../navigation/Navigator';
import Modder from '../shared/modder/Modder';

/**
 * Wraps the modder to respect the statusbar position 
 */
const DarkModder = styled(Modder)`
    flex: 1;
    paddingTop: 24px;
`

export default class Main extends PureComponent {


    static DARK_MODE_CHANGED_TIMES = 0;

    /**
     * Contains all the information that can be used 
     * along the app.
     */
    state = {
        people: [],
        events: [],
        darkMode: true,
    }

    /**
     * Gets ready the Database connection
     * TODO: Active database
     */
    constructor(props) {
        super(props);
        this.database = new Firebase();
    }

    /**
     * Adjusts the app's appearance to dark or light mode 
     */
    changeDarkMode = value => {
        return this.setState({ darkMode: value }, () => this.darkModeChanged());
    }

    darkModeChanged = () => {
        Main.DARK_MODE_CHANGED_TIMES += 1;
        const message = `Dark Mode changed to ${this.state.darkMode}`;
        console.log(`${Main.DARK_MODE_CHANGED_TIMES} time: ${message}`);
    }

    /**
     * Activates listeners to update the state according 
     * to the database 
     * TODO: Active database listeners 
     */
    componentDidMount() {
        this.database.synchPeople(this.synchList('people'));
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

    getLook = () => ({
        ...ThemeValues,
        darkMode: this.state.darkMode,
        changeDarkMode: this.changeDarkMode
    })

    /**
     * Renders the entire app passing its state to make it available
     * for each component by using withContext HOC. 
     * TODO: Whatever component can be tested here.
     */
    render() {

        const params = {
            look: this.getLook(),
            store: this.getStore()
        };

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <DarkModder {...params.look}>
                    <Navigator screenProps={params} />
                </DarkModder>
            </SafeAreaView>
        );

    }

}