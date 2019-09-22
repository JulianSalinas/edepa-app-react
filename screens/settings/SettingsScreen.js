import React from 'react';
import PropTypes from 'prop-types';
import SettingsLayout from './SettingsLayout';


export default class SettingsScreen extends React.Component {

    static propTypes = {
        navigation: PropTypes.object
    };

    render() {
        return <SettingsLayout {...this.props}/>;
    }

}
