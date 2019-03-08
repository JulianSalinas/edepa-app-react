import React from 'react';
import HomeLayout from './HomeLayout';
import DatabaseTypes from '../types/DatabaseTypes';


export default class HomeScreen extends React.Component {

    static propTypes = {
        database: DatabaseTypes
    };

    static navigationOptions = {
        title: 'Inicio',
        headerTitleStyle: { flexGrow: 1, textAlign: 'center'}
    };

    render() {
        return <HomeLayout {...this.props}/>;
    }

}
