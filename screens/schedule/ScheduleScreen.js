import React from 'react';
import DatabaseTypes from '../../types/Database';

import ScheduleLayout from './ScheduleLayout';
import withAppContext from '../../app/Context';


class ScheduleScreen extends React.Component {

    static propTypes = {
        database: DatabaseTypes
    };

    state = {
        isSearchBarOpen: true
    };

    showSearchBar = () => {
        this.setState({ isSearchBarOpen: true });
    };

    hideSearchBar = () => {
        this.setState({ isSearchBarOpen: false });
    };

    getEvents = () => {
        const events = this.props.database.events;
        return Object.keys(events).map(key => events[key]);
    };

    render() {
        return <ScheduleLayout {...this.props}
                               events={this.getEvents()}
                               showSearchBar={this.showSearchBar}
                               hideSearchBar={this.hideSearchBar}
                               isSeachBarOpen={this.state.isSearchBarOpen}
        />;
    }

}

export default withAppContext(ScheduleScreen);