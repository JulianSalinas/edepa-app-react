import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Item from '../../shared/common/Item';
import Section from '../../shared/common/Section';
import Modder from '../../shared/modder/Modder';

import { Store } from '../../app/Types';
import { SectionList } from 'react-native';
import { Container } from 'native-base';
import Background from '../../shared/background/Background';


const PeopleList = props => 
    <SectionList
        style={{ flex: 3 }}
        sections={props.people}
        keyExtractor={item => item.key } 
        renderSectionHeader={({ section }) => 
            <Section darkMode={props.darkMode} title={section.title}/>
        }
        renderItem={({ item }) => 
            <Item darkMode={props.darkMode} title={item.completeName} subtitle={item.personalTitle}/>
        }
    />

const PeopleView = props => 
    <Background {...props}>
        <PeopleList {...props}/>
        <Modder darkMode={props.darkMode} changeDarkMode={props.changeDarkMode} />
    </Background>

const PeopleLayout = props => 
    <PeopleView    
        people={props.people}   
        darkMode={props.kFeel.isDarkMode()}
        darkPrimary={props.kFeel.darkPrimary}
        darkSecondary={props.kFeel.darkSecondary}
        changeDarkMode={props.kFeel.changeDarkMode}
    />

class PeopleScreen extends Component {

    /**
     * People  has the next format: 
     * [{1}, { title: string, data: array }, {3}]
     */
    state = { 
        people: [] 
    }

    static propTypes = {
        screenProps: Store,
        navigation: PropTypes.object.isRequired
    }

    /**
     * Gets the first letter from a person's name 
     */
    static getInitial = (item, prop='completeName') => {
        return item[prop] ? item[prop][0] : '#';
    }

    /**
     * Updates people by adding the person in the corresponding 
     * group in the state
     * ? The people are ordered alphabetically
     */
    static getDerivedStateFromProps(props, state) {

        // First time, there is nothing to update 
        const people = props.screenProps.store.people;

        if (people.length <= 0 || people.length === state.people.length) {
            return null;
        }

        const person = people[people.length - 1];
        const title = PeopleScreen.getInitial(person);

        // List is initialized with the first group
        if (state.people.length === 0){
            return { people: [{ title, data: [person] }]}
        }

        // Last generated group to attach our new person
        const group = state.people[state.people.length - 1];

        if (group.data.some(item => item.key === person.key)){
            return null;
        }

        // If the group exists, we attach the item to it,
        // otherwise, we create a new group 
        group.title === title ? 
        group.data = [...group.data, person] : 
        state.people = [...state.people, { title, data: [person]}];

        return state;

    }

    render(){
        return (
            <Container>
                <PeopleLayout people={this.state.people} {...this.props.screenProps}/>
            </Container>
        )
    }


}

export default PeopleScreen;
