import React from 'react';
import NewsLayout from './NewsLayout';
import DatabaseTypes from '../types/DatabaseTypes';


export default class NewsScreen extends React.Component {

    static propTypes = {
        database: DatabaseTypes
    };

    static navigationOptions = {
        title: 'Noticias',
        headerTitleStyle: { flexGrow: 1, textAlign: 'center'}
    };

    render() {
        return <NewsLayout {...this.props}/>;
    }

}
