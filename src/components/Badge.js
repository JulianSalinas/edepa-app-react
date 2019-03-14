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
        textAlign: 'center'
    },
    badgeStyle: {
        height: 24,
        borderRadius: 0,
        marginBottom: theme.spacing * 2,
    }
};

const ColorBadge = props =>
    <Badge style={[
        classes.badgeStyle, props.style,
        { backgroundColor: props.background },
    ]}>
        <Text style={[
            classes.badgeText,
            { color: props.color },
        ]}> { props.text } </Text>
    </Badge>;

ColorBadge.defaultProps ={
    style: {},
    color: 'white',
    background: theme.secondary
};

ColorBadge.propTypes = {
    style: PropTypes.object,
    color: PropTypes.string,
    background: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default ColorBadge;