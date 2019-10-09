import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Item from '../../shared/common/Item';
import Section from '../../shared/common/Section';
import DarkModder from '../../shared/modder/DarkModder';

import { Screen } from '../../app/Types';
import { SectionList } from 'react-native';


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
    />

const PeopleList = props =>
    <SectionList
        style={{ flex: 1 }}
        sections={props.people}
        keyExtractor={item => item.key}
        renderItem={getItem(props.darkMode)}
        renderSectionHeader={getSection(props.darkMode)}
    />

const PeopleLayout = props =>
    <DarkModder {...props} style={{ flex: 1 }}>
        <PeopleList {...props} />
    </DarkModder>

class PeopleScreen extends Component {

    /**
     * People  has the next format: 
     * [{1}, { title: string, data: array }, {3}]
     */
    state = {
        people: []
    }

    static propTypes = {
        screenProps: Screen,
        navigation: PropTypes.object.isRequired
    }

    /**
     * Updates people by adding the person in the corresponding 
     * group in the state
     * ? The people are ordered alphabetically
     */
    static getDerivedStateFromProps(props, state) {

        // First time, there is nothing to update 
        const people = props.screenProps.store.people;

        // Get the amount of items we have, if it is equals the list does not update
        const current = state.people.reduce((acc, next) => acc + next.data.length, 0);

        if (people.length <= 0 || people.length === current) {
            return state;
        }

        const person = people[people.length - 1];
        const title = getInitial(person);

        // List is initialized with the first group
        if (current === 0) {
            return { people: [{ title, data: [person] }] }
        }

        // Last generated group to attach our new person
        const group = state.people[state.people.length - 1];

        if (group.data.some(item => item.key === person.key)) {
            return state;
        }

        // If the group exists, we attach the item to it,
        // otherwise, we create a new group 
        group.title === title ?
            group.data = [...group.data, person] :
            state.people = [...state.people, { title, data: [person] }];

        return state;

    }

    render() {
        return <PeopleLayout
            people={this.state.people}
            darkMode={this.props.screenProps.kFeel.isDarkMode()}
            changeDarkMode={this.props.screenProps.kFeel.changeDarkMode}
        />
    }


}

export default PeopleScreen;
