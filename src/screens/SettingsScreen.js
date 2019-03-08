import React from 'react';
import SettingsLayout from './SettingsLayout';
import DatabaseTypes from '../types/DatabaseTypes';


export default class SettingsScreen extends React.Component {

    static propTypes = {
        database: DatabaseTypes
    };

    static navigationOptions = {
        title: 'Configuración'
    };

    render() {
        return <SettingsLayout {...this.props}/>;
    }

}
