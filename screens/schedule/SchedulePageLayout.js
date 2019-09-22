import React from 'react';
import PropTypes from 'prop-types';
import EventTypes from '../../types/Event';
import DatabaseTypes from '../../types/Database';
import SearchScreen from '../search/SearchScreen';
import StatusBar from '../../components/StatusBar';

import theme from '../../constants/Theme';
import styles from '../../constants/Styles';
import withAppContext from '../../app/Context';
import { getTimeString, getDateString } from '../../utils/Time';

import flatColors from '../../constants/Flat';
import { hashColor } from '../../utils/Colors';

import {ImageBackground, ScrollView} from 'react-native';

import {
    Tab,
    Tabs,
    Icon,
    Item,
    Grid,
    Col,
    Row,
    View,
    Body,
    Text,
    Input,
    Button,
    Header,
    Container,
    TabHeading, Content, List, ListItem, Left
} from 'native-base';
import Divider from "../../components/Divider";
import Badge from "../../components/Badge";
import pattern from "../../../assets/images/pattern.png";


const classes = {
    ...styles,
    event: {

    },
    eventContent: {
        minHeight: 100,
        padding: theme.spacing * 4,
    },
    eventTextTitle: {
        color: theme.darkFont
    },
    eventTextDetail: {
        fontSize: 14,
        color: theme.greyFont
    },
    eventsDivider: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        padding: theme.spacing * 2
    }
};

const EventItem = props =>
    <View style={classes.card}>
        <Grid>
            <Col style={{
                width: 5,
                backgroundColor: hashColor(props.event.eventype, flatColors)
            }}/>

            <Col>
                <View style={classes.eventContent}>
                    <Badge text={props.event.eventype}
                           background={hashColor(props.event.eventype, flatColors)}
                           style={classes.marginBottom}/>

                    <Text style={[classes.eventTextTitle, classes.marginBottom]}>
                        { props.event.title }
                    </Text>
                    <Text style={classes.eventTextDetail}>
                        { `De ${getTimeString(props.event.start)} a ${getTimeString(props.event.end)}` }
                    </Text>
                    <Text style={classes.eventTextDetail}>
                        { props.event.location }
                    </Text>
                </View>
                <Divider/>
                <Button transparent>
                    <Text style={{ color: hashColor(props.event.eventype, flatColors) }}>
                        LEER MÁS
                    </Text>
                </Button>
            </Col>
        </Grid>
    </View>;

EventItem.propsTypes = {
    event: EventTypes
};

const EventsDivider = props => {

    const { start, end } = props.group;
    const description = `Bloque ${getTimeString(start)} - ${getTimeString(end)}`;

    return (
        <View style={classes.eventsDivider}>
            <Badge text={description}
                   color={theme.greyFont}
                   background={theme.background}
                   style={{ borderRadius: 5 }}/>
        </View>
    );

};

EventsDivider.propTypes = {
    group: PropTypes.shape({
        start: PropTypes.number.isRequired,
        end: PropTypes.number.isRequired
    })
};

const EventsGroup = props => props.events.map((event, index) =>
    <EventItem key={index} event={event}/>
);

EventsGroup.propTypes = {
    events: PropTypes.array.isRequired
};

const EventItems = props => props.eventGroups.map((item, index) =>
    <View key={index}>
        <EventsDivider group={item.group}/>
        <EventsGroup events={item.children}/>
    </View>
);

EventItems.propsTypes = {
    eventGroups: PropTypes.array.isRequired
};

const ScheduleTab = props =>
    <Container>
        <ScrollView>
        <Content style={[
            classes.marginTop,
            classes.marginBottom,
            { backgroundColor: '#FAFAFA'}
        ]}>
            <EventItems {...props}/>
        </Content>
        </ScrollView>
    </Container>;

export default withAppContext(ScheduleTab);