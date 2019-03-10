import React from 'react';
import PropTypes from 'prop-types';
import ScheduleLayout from './ScheduleLayout';


export default class ScheduleScreen extends React.Component {

    static propTypes = {
        // navigation: PropTypes.object
    };

    render() {
        return <ScheduleLayout {...this.props}/>;
    }

}
