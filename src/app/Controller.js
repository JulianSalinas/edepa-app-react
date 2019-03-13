import React from 'react';
import Theme from '../constants/Theme';
import Provider from './Provider';
import AppNavigator from './Navigator';
import FirebaseDatabse from '../database/Firebase';


export default class Controller extends React.Component {

    state = {
        people: {},
        events: {},
        congress: {},
        appTheme: Theme,
        user: require('../files/LocalUser')
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

    render() {
        const appTheme = this.state.appTheme;
        return (
            <Provider database={this.state} appTheme={appTheme}>
            <AppNavigator/>
            </Provider>
        );
    }

}