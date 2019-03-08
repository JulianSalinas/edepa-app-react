import React from 'react';
import EventLayout from './EventLayout';
import DatabaseTypes from '../types/DatabaseTypes';


export default class EventScreen extends React.Component {

    static propTypes = {
        database: DatabaseTypes
    };

    static navigationOptions = {
        title: 'Evento'
    };

    render() {
        const message = this.props.navigation.getParam('message', 'Sin mensaje');
        return <EventLayout {...this.props} message={message}/>;
    }

}
