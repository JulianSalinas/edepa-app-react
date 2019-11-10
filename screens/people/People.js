// Core
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// Libs
import { SectionList } from 'react-native';

// Local 
import { withMode } from '../../theme/ThemeMode';
import { PersonTypes } from '../../app/AppTypes';
import Item from './Person';
import Section from '../../shared/Section';
import { groupBy } from '../../scripts/Utils';
import Firebase from '../../services/Firebase';


const getInitial = (item, prop = 'completeName') => {
    return item[prop] ? item[prop][0] : '#';
}

const getItem = darkMode => ({ item }) =>
    <Item
        darkMode={darkMode}
        title={item.completeName}
        subtitle={item.personalTitle}
    />

const getSection = darkMode => ({ section }) =>
    <Section
        darkMode={darkMode}
        title={section.title}
        style={{ marginBottom: 8 }}
    />

const PeopleLayout = props => <SectionList
    style={{ flex: 1 }}
    sections={props.people}
    keyExtractor={item => item.key}
    renderItem={getItem(props.darkMode)}
    renderSectionHeader={getSection(props.darkMode)}
    stickySectionHeadersEnabled
/>

/**
 * People  has the next format: 
 * [{1}, { title: string, data: array }, {3}]
 */
class People extends PureComponent {

    state = {
        people: [],
        peopleGroups: []
    }

    constructor(props) {
        super(props);
        this.database = new Firebase();
    }

    componentDidMount() {
        this.database.synchPeople(this.synchList('people'))
    }

    onItemRead = (list, item) => this.setState(state => ({
        [list]: [...state[list], item]
    }))

    onItemUpdated = (list, item) => this.setState(state => ({
        [list]: state[list].map(old => old.key === key ? item : old)
    }))

    onItemDeleted = (list, updated) => this.setState(state => ({
        [list]: state[list].filter(item => item.key !== updated.key)
    }))

    synchList = listName => (key, item, action) => {
        item.key = key;
        action === Firebase.READ ? this.onItemRead(listName, item) :
            action === Firebase.DELETE ? this.onItemDeleted(listName, item) :
                this.onItemUpdated(listName, item);
    }

    render() {
        return <PeopleLayout
            people={this.state.peopleGroups}
            darkMode={this.props.darkMode}
        />
    }

}

/**
 * Updates people by adding the person in the corresponding 
 * group in the state
 * ? The people are ordered alphabetically
 */
// People.getDerivedStateFromProps = (props, state) => {

//     const current = state.people.reduce((acc, next) => acc + next.data.length, 0);

//     if (props.people.length === 0 || current === props.people.length) {
//         return null;
//     }
//     return { people: groupBy(props.people, 'completeName', getInitial) }
// }

export default withMode(People, true);
