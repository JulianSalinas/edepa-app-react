import React from 'react';
import ScheduleLayout from './ScheduleLayout';
import DatabaseTypes from '../types/DatabaseTypes';


export default class ScheduleScreen extends React.Component {

    static propTypes = {
        database: DatabaseTypes
    };

    static navigationOptions = {
        title: 'Cronograma',
        headerTitleStyle: { flexGrow: 1, textAlign: 'center'}
    };

    render() {
        return <ScheduleLayout {...this.props}/>;
    }

}
