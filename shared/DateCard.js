import React from 'react';
import Badge from './Badge';
import Divider from './Divider';
import PropTypes from 'prop-types';
import { Col, Grid, Icon, Text, View } from 'native-base';

import theme from '../constants/Theme';
import styles from '../constants/Styles';

const classes = {
    ...styles,
    cardRight: {
        padding: theme.spacing * 4,
        backgroundColor: theme.container,
    },
    cardLeft: {
        width: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.secondary
    },
    cardIcon: {
        fontSize: 20,
        color: theme.lightFont
    }
};

const DateCol = props =>
    <Col>
        <Text style={{ fontWeight: 'bold' }}> { props.name } </Text>
        <Text> { props.date } </Text>
    </Col>;

const DateGrid = props =>
    <Grid style={classes.marginTop}>
        <DateCol name={'Inicio'} date={props.start}/>
        <DateCol name={'Fin'} date={props.end}/>
    </Grid>;

const DateLeft = () =>
    <Col style={classes.cardLeft}>
        <Icon name={'calendar'} type={'Entypo'} style={classes.cardIcon}/>
    </Col>;

const DateRight = props =>
    <Col style={classes.cardRight}>
        <Badge text={'Fecha'} style={classes.marginBottom}/>
        <Divider style={[classes.marginBottom, classes.marginTop]}/>
        <DateGrid {...props}/>
    </Col>;

const DateCard = props =>
    <View style={[classes.card, classes.marginTop]} transparent>
        <Grid>
            <DateLeft/>
            <DateRight {...props}/>
        </Grid>
    </View>;

DateCard.propTypes = {
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
};

export default DateCard;