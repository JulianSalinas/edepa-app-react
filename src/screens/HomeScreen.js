import React from 'react';
import HomeLayout from './HomeLayout';
import NavigationTypes from '../types/NavigationTypes';


export default class HomeScreen extends React.Component {

    static propTypes = {
        navigation: NavigationTypes
    };

    openDetail = () => {
        this.props.navigation.navigate('EventScreen', {
            message: 'Hello, I am your home view'
        });
    };

    render() {
        return <HomeLayout {...this.props} openDetail={this.openDetail}/>;
    }

}
