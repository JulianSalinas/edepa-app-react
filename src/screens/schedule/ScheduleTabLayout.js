import React from 'react';
import PropTypes from 'prop-types';
import EventTypes from '../../types/Event';
import DatabaseTypes from '../../types/Database';
import SearchScreen from '../search/SearchScreen';
import StatusBar from '../../components/StatusBar';

import theme from '../../constants/Theme';
import styles from '../../constants/Styles';
import withAppContext from '../../app/Context';
import { getTimeString } from '../../utils/Time';
import { ScrollView } from 'react-native';

import {
    Tab,
    Tabs,
    Icon,
    Item,
    Grid,
    Col,
    Row,
    View,
    Text,
    Input,
    Header,
    Container,
    TabHeading, Content, List, ListItem, Left, Body
} from 'native-base';
import UserAvatar from "../../components/Avatar";

const classes = {
    ...styles
};

const EventItem = props =>
    <View>
        <Grid>
            <Col style={{ width: 5, backgroundColor: theme.secondary }}>

            </Col>
            <Col style={{ backgroundColor: theme.primary }}>
                <Row>
                    <Text>
                        { props.event.title }
                    </Text>
                </Row>
                <Row>
                    <Text>
                        { `De ${getTimeString(props.event.start)} a ${getTimeString(props.event.end)}` }
                    </Text>
                </Row>
            </Col>
        </Grid>
    </View>;

EventItem.propsTypes = {
    event: EventTypes
};

const EventList = props => props.events.map((event, index) =>
    <EventItem key={index} event={event}/>
);

EventList.propsTypes = {
    events: PropTypes.arrayOf(EventTypes)
};

const ScheduleTab = props =>
    <Container>
        <ScrollView>
            <Content>
                <EventList {...props} events={props.formattedEvents}/>
            </Content>
        </ScrollView>
    </Container>;

ScheduleTab.propsTypes = {
    formattedEvents: PropTypes.arrayOf(EventTypes)
};

export default withAppContext(ScheduleTab);