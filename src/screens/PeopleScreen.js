import React from 'react';
import PropTypes from 'prop-types';
import PeopleLayout from './PeopleLayout';


export default class PeopleScreen extends React.Component {

    static propTypes = {
        navigation: PropTypes.object
    };

    render() {
        return <PeopleLayout {...this.props}/>;
    }

}