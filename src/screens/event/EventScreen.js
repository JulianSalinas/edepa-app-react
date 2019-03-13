import React from 'react';
import PropTypes from 'prop-types';
import EventLayout from './EventLayout';
import NavigationTypes from '../../types/Navigation';


export default class EventScreen extends React.Component {

    static propTypes = {
        message: PropTypes.string,
        navigation: NavigationTypes
    };

    static navigationOptions = {
        title: 'Evento'
    };

    closeDetail = () => {
        this.props.navigation.goBack();
    };

    render() {
        const message = this.props.navigation.getParam('message', 'No hay mensaje');
        return <EventLayout {...this.props} message={message} closeDetail={this.closeDetail}/>;
    }

}
