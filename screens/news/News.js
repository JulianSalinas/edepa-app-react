// Core 
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// Local 
import Layout from './Layout';
import { withMode } from '../../theme/ThemeMode';
import { READ, UPDATE, DELETE } from '../../constants/Actions';

// Cohstants 
const LIST_KEY = 'posts';


class News extends PureComponent {

    state = {
        posts: []
    }

    componentDidMount() {
        this.props.actions.syncNews(this.syncList)
    }

    syncList = (key, value, action) => {
        value.key = key;
        if (action === READ) this.onItemRead(LIST_KEY, value)
        else if (action === UPDATE) this.onItemUpdated(LIST_KEY, value)
        else if (action === DELETE) this.onItemDeleted(LIST_KEY, value)
    }

    onItemRead = (key, value) => this.setState(state => ({
        [key]: [value, ...state[key]]
    }))

    onItemUpdated = (key, value) => this.setState(state => ({
        [key]: state[key].map(old => old.key === key ? value : old)
    }))

    onItemDeleted = (key, value) => this.setState(state => ({
        [key]: state[key].filter(item => item.key !== value.key)
    }))

    render() {
        return <Layout posts={this.state.posts} />
    }

}

export default withMode(News, true);