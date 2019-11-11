// Core 
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// Local 
import Layout from './Layout';
import { withMode } from '../../theme/ThemeMode';
import { READ, UPDATE, DELETE } from '../../constants/Actions';

// Cohstants 
const LIST_KEY = 'people';


class People extends PureComponent {

    state = {
        people: [],
        sections: {}
    }

    componentDidMount() {
        this.props.actions.syncPeople(this.syncList)
    }

    getInitial = (item, prop = 'completeName') => {
        return item[prop] ? item[prop][0] : '#';
    }

    syncList = (key, value, action) => {
        value.key = key;
        if (action === READ) this.onItemRead(LIST_KEY, value)
        else if (action === UPDATE) this.onItemUpdated(LIST_KEY, value)
        else if (action === DELETE) this.onItemDeleted(LIST_KEY, value)
    }

    onItemRead = (key, value) => {
        const initial = this.getInitial(value);
        const sections = this.state.sections;
        if(sections[initial]) {
            sections[initial].data = [...sections[initial].data, value] 
        }
        else {
            sections[initial] = { title: initial, data: [value] }
        }
        this.setState(state => ({ [key]: [value, ...state[key]], sections }))
    }

    onItemUpdated = (key, value) => this.setState(state => ({
        [key]: state[key].map(old => old.key === key ? value : old)
    }))

    onItemDeleted = (key, value) => this.setState(state => ({
        [key]: state[key].filter(item => item.key !== value.key)
    }))

    render() {
        return <Layout 
            people={this.state.people} 
            sections={Object.values(this.state.sections)}
        />
    }

}

export default withMode(People, true);