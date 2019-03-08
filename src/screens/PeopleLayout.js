import React from 'react';
import PersonTypes from '../types/PersonTypes';
import DatabaseTypes from '../types/DatabaseTypes';
import withAppContext from '../controller/AppContext';

import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';


const Person = props =>
    <Text> {props.person.completeName} </Text>;

Person.propTypes = {
    person: PersonTypes
};

const People = props => Object.keys(props.database.people).map(key =>
    <Person key={key} person={props.database.people[key]}/>
);

People.propTypes = {
    database: DatabaseTypes
};

const PeopleLayout = props =>
    <ScrollView>
        <View>
            <People {...props}/>
        </View>
    </ScrollView>;

PeopleLayout.propTypes = {
    database: DatabaseTypes
};

export default withAppContext(PeopleLayout);
