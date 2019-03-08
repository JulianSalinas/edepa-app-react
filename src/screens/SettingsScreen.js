import React from 'react';
import SettingsLayout from './SettingsLayout';
import DatabaseTypes from '../types/DatabaseTypes';


export default class SettingsScreen extends React.Component {

    static propTypes = {
        database: DatabaseTypes
    };

    static navigationOptions = {
        title: 'Configuración',
        headerTitleStyle: { flexGrow: 1, textAlign: 'center'}
    };

    render() {
        return <SettingsLayout {...this.props}/>;
    }

}
