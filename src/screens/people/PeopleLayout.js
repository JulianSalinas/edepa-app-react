import React from 'react';
import PropTypes from 'prop-types';
import PersonTypes from '../../types/Person';

import UserAvatar from '../../components/Avatar';
import StatusBar from '../../components/StatusBar';
import withAppContext from '../../app/Context';

import {
    Icon,
    View,
    Text,
    List,
    Left,
    Body,
    Right,
    Content,
    ListItem,
    Container,
} from 'native-base';


const PersonAbout = props => props.about !== null ?
    <Right>
        <Icon name='md-arrow-dropright'/>
    </Right>: null;

PersonAbout.propTypes = {
    about: PropTypes.string
};

const Person = props =>
    <ListItem iconRight thumbnail>
        <Left>
            <UserAvatar size={36} name={props.person.completeName}/>
        </Left>
        <Body>
            <Text>{props.person.completeName}</Text>
            <Text note>{props.person.personalTitle}</Text>
        </Body>
        <PersonAbout about={props.person.about}/>
    </ListItem>;

Person.propTypes = {
    person: PersonTypes
};

const PeopleDivider = props =>
    <ListItem itemDivider>
        <Text>{props.group}</Text>
    </ListItem>;

PeopleDivider.propTypes = {
    group: PropTypes.string.isRequired
};

const PeopleGroup = props => props.people.map((person, index) =>
    <Person key={index} person={person}/>
);

PeopleGroup.propTypes = {
    people: PropTypes.array.isRequired
};

const PeopleItems = props => props.formattedPeople.map((item, index) =>
    <View key={index}>
        <PeopleDivider group={item.group}/>
        <PeopleGroup people={item.children}/>
    </View>
);

PeopleItems.propTypes = {
    formattedPeople: PropTypes.array.isRequired
};

const PeopleLayout = props =>
    <Container>
        <StatusBar color={props.appTheme.decoration}/>
        <Content>
            <List>
                <PeopleItems {...props}/>
            </List>
        </Content>
    </Container>;

export default withAppContext(PeopleLayout);
