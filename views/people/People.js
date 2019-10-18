// Core
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// Libs
import { SectionList } from 'react-native';

// Local 
import { PersonTypes } from '../../app/Types';
import Item from '../../shared/common/Item';
import Section from '../../shared/common/Section';
import { groupBy } from '../../scripts/Utils';


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

    state = { people: [] }

    render() {
        return <PeopleLayout
            people={this.state.people}
            darkMode={this.props.darkMode}
        />
    }

}

/**
 * Updates people by adding the person in the corresponding 
 * group in the state
 * ? The people are ordered alphabetically
 */
People.getDerivedStateFromProps = (props, state) => {

    const current = state.people.reduce((acc, next) => acc + next.data.length, 0);

    if (props.people.length === 0 || current === props.people.length){
        return null;
    }
    return { people: groupBy(props.people, 'completeName', getInitial) }
}

People.propTypes = {
    darkMode: PropTypes.bool,
    people: PropTypes.arrayOf(PersonTypes)
}

People.defaultProps = {
    darkMode: true,
    people: []
}

export default People;
