import React from 'react';
import PersonTypes from '../types/PersonTypes';
import DatabaseTypes from '../types/DatabaseTypes';

import materialColors from '../json/Material';
import withAppContext from '../controller/AppContext';

import { ScrollView, View, Text } from "react-native";


function hashCode(key){
    let hash = 0, i, chr;
    if (key.length === 0) return hash;
    for (i = 0; i < key.length; i++) {
        chr   = key.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
}

function randomColor(key){
    const value = Math.abs(hashCode(key));
    return materialColors.length > 0 ? materialColors[value % materialColors.length] : 0;
}

const styles = {
    container: {
        padding: 8,
        backgroundColor: '#fbfbfb'
    },
    personCard: {
        padding: 16,
        marginBottom: 8
    }
};

const Person = props =>
    <Text>{props.person.completeName}</Text>;

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
        <View style={styles.container}>
            <People {...props}/>
        </View>
    </ScrollView>;

PeopleLayout.propTypes = {
    database: DatabaseTypes
};

export default withAppContext(PeopleLayout);
