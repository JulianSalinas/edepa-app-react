import React from 'react';
import PropTypes from 'prop-types';
import PeopleLayout from './PeopleLayout';
import DatabaseTypes from "../types/DatabaseTypes";
import withAppContext from '../controller/AppContext';

import { capitalize } from '../utils/utils-strings';
import { splitByProp, sortByProp } from '../utils/utils-lists';


class PeopleScreen extends React.Component {

    static propTypes = {
        database: DatabaseTypes,
        navigation: PropTypes.object
    };

    getPeople = () => {
        const people = this.props.database.people;
        return Object.keys(people).map(key => people[key]);
    };

    formatPerson = person => {
        const name = person.completeName.toLowerCase();
        return {...person, completeName: capitalize(name) }
    };

    formatPeople = () => {
        const prop = 'completeName';
        let people = this.getPeople();
        people = people.map(this.formatPerson);
        people = sortByProp(prop, people);
        return splitByProp(prop, people);
    };

    render() {
        return <PeopleLayout {...this.props}
                             people={this.getPeople()}
                             formattedPeople={this.formatPeople()}
        />;
    }

}

export default withAppContext(PeopleScreen);