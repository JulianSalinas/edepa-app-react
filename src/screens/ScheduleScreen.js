import React from 'react';
import PropTypes from 'prop-types';
import ScheduleLayout from './ScheduleLayout';


export default class ScheduleScreen extends React.Component {

    state = {
        isSearchBarOpen: true
    };

    showSearchBar = () => {
        this.setState({ isSearchBarOpen: true });
    };

    hideSearchBar = () => {
        this.setState({ isSearchBarOpen: false });
    };

    render() {
        return <ScheduleLayout {...this.props}
                               showSearchBar={this.showSearchBar}
                               hideSearchBar={this.hideSearchBar}
                               isSeachBarOpen={this.state.isSearchBarOpen}
        />;
    }

}
