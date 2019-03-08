import React from 'react';
import PeopleLayout from './PeopleLayout';
import DatabaseTypes from '../types/DatabaseTypes';


export default class PeopleScreen extends React.Component {

    static propTypes = {
        database: DatabaseTypes
    };

    static navigationOptions = {
        title: 'Expositores',
        headerTitleStyle: { flexGrow: 1, textAlign: 'center'}
    };

    render() {
        return <PeopleLayout {...this.props}/>;
    }

}