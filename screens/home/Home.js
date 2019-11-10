// Core 
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// Local 
import Layout from './Layout'
import { withMode } from '../../theme/ThemeMode';


class Home extends PureComponent {

    state = {
        home: null
    }

    componentDidMount() {
        this.props.actions.watchHome(home => this.setState({ home }));
    }

    render() {
        return <Layout home={this.state.home} />
    }

}

export default withMode(Home, true);