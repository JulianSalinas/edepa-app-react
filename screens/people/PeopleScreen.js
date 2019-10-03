import React from 'react';
import PropTypes from 'prop-types';

import { Person, Store } from '../../app/Types';
import Avatar from '../../shared/avatar/Avatar';

import flat from '../../constants/Flat';
import { colorFor } from '../../scripts/Color';
import { groupBy } from '../../scripts/Utils';

import styled from 'styled-components/native';
import { View, Text } from 'react-native';


import {
    Icon,
    List,
    Left,
    Body,
    Right,
    Content,
    ListItem,
    Container,
} from 'native-base';

const StyledView = styled(View)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1c40f
`

const StyledText = styled(Text)`
    color: #FFF;
    margin-end: 12px;
    font-size: 18px;
    letter-spacing: 2.5;
    text-transform: uppercase;
`

const PersonAbout = props => props.about !== null ?
    <Right>
        <Icon name='md-arrow-dropright'/>
    </Right>: null

PersonAbout.propTypes = {
    about: PropTypes.string
};

const PersonView = props =>
    <ListItem iconRight thumbnail>
        <Left>
            <Avatar size={36} name={props.person.completeName} colors={flat} colorFor={colorFor}/>
        </Left>
        <Body>
            <Text>{props.person.completeName}</Text>
            <Text>{props.person.personalTitle}</Text>
        </Body>
        <PersonAbout about={props.person.about}/>
    </ListItem>

PersonView.propTypes = {
    person: Person
};

const PeopleDivider = props =>
    <ListItem itemDivider>
        <Text>{props.group}</Text>
    </ListItem>

PeopleDivider.propTypes = {
    group: PropTypes.string.isRequired
};

const PeopleGroup = props => props.people.map((person, index) =>
    <PersonView key={index} person={person}/>
);

PeopleGroup.propTypes = {
    people: PropTypes.array.isRequired
};

const PeopleItems = props => props.peopleGroups.map((item, index) =>
    <View key={index}>
        <PeopleDivider group={item.group}/>
        <PeopleGroup people={item.children}/>
    </View>
);

PeopleItems.propTypes = {
    peopleGroups: PropTypes.array.isRequired
};

const PeopleScreen3 = props => 
    <Container>
        <Content>
            <List>
                <PeopleItems {...props}/>
            </List>
        </Content>
    </Container>


const PeopleScreen2 = props => {
    
    // console.log(props);
    const peopleGroups = groupBy(props.people, 'completeName', (item, prop) => item[prop][0])
    return <PeopleScreen3 peopleGroups={peopleGroups} />
}

const PeopleScreen = props => 
    <PeopleScreen2
        {...props.screenProps.store}
    />

PeopleScreen.propTypes = {
    screenProps: Store,
    navigation: PropTypes.object.isRequired
}

export default PeopleScreen;