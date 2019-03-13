import React from 'react';
import HomeLayout from './HomeLayout';
import NavigationTypes from '../types/Navigation';
import withAppContext from '../app/Context';
import DatabaseTypes from "../types/Database";
import PropTypes from "prop-types";

class HomeScreen extends React.Component {

    static propTypes = {
        database: DatabaseTypes,
        navigation: PropTypes.object
    };

    openDetail = () => {
        this.props.navigation.navigate('EventScreen', {
            message: 'Hello, I am your home view'
        });
    };

    getCongress = () => {
        return this.props.database.congress;
    };

    formatCongress = () => {
        const congress = this.getCongress();
        const start = congress.start;
        const end = congress.end;
        return congress;
    };

    render() {
        return <HomeLayout {...this.props}
                           openDetail={this.openDetail}
                           congress={this.formatCongress()}
        />;
    }

}

export default withAppContext(HomeScreen);