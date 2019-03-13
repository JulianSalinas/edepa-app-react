import React from 'react';
import SearchLayout from './SearchLayout';
import NavigationTypes from '../../types/Navigation';

export default class EventScreen extends React.Component {

    state = {
        results: []
    };

    static propTypes = {
        navigation: NavigationTypes
    };

    handleResults = () => {
        this.setState({ results: results });
    };

    render() {
        return <SearchLayout {...this.props}
                             results={this.state.results}
                             handleResults={this.handleResults}/>;
    }

}
