import React, { Component } from 'react';
import AppProvider from './AppProvider';
import AppNavigator from '../navigation/MainNavigator';
import FirebaseDatabse from '../model/FirebaseDatabase';


export default class AppController extends Component {

    state = {
        people: {},
        events: {},
        congress: {},
        user: require('../json/LocalUser')
    };

    componentDidMount(){
        this.database = new FirebaseDatabse();
        this.database.synchPeople(this.readPerson);
        this.database.synchEvents(this.readEvent);
        this.database.synchCongress(this.readCongress);
    }

    componentWillUnmount() {
        this.database.closeConnection();
    }

    readEvent = (key, event, action) => {
        const events = this.state.events;
        action === FirebaseDatabse.DELETE ?
            delete events[key]:
            events[key] = event;
        this.setState({ events: events});
    };

    readPerson = (key, person, action) => {
        const people = this.state.people;
        action === FirebaseDatabse.DELETE ?
            delete people[key]:
            people[key] = person;
        this.setState({ people: people});
    };

    readCongress = congress => {
        this.setState({ congress: congress });
    };

    getDatabase = () => {
        return { ...this.state };
    };

    render() {
        return (
            <AppProvider database={this.getDatabase()}>
                <AppNavigator/>
            </AppProvider>
        );
    }

}