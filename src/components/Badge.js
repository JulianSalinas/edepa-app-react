import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Text } from 'native-base';

import theme from '../constants/Theme';
import styles from '../constants/Styles';

const classes = {
    ...styles,
    badgeText: {
        flex: 1,
        fontSize: 12,
        color: 'white'
    },
    badgeStyle: {
        height: 24,
        borderRadius: 0,
        marginBottom: theme.spacing * 2,
        backgroundColor: theme.container
    }
};

const GetClass = props => [
    classes.badgeStyle,
    { backgroundColor: props.color !== undefined ? props.color : theme.secondary }
];

const ColorBadge = props =>
    <Badge style={[GetClass(props.color), props.style]}>
        <Text uppercase style={classes.badgeText}> { props.text } </Text>
    </Badge>;

ColorBadge.defaultProps ={
    style: {},
    color: theme.secondary
};

ColorBadge.propTypes = {
    style: PropTypes.object,
    color: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default ColorBadge;