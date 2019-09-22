import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Text, View } from 'native-base';

import theme from '../constants/Theme';
import classes from '../constants/Styles';


const ButtonIcon = props => props.name !== null ?
    <Icon style={{ color: props.color }} name={props.name}/> : null;

ButtonIcon.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string
};

const LightButton = props =>
    <View style={[classes.card, props.style]} transparent>
        <Button transparent block iconLeft onPress={props.onPress}>
            <ButtonIcon {...props}/>
            <Text style={{ color: props.color }}>{ props.text }</Text>
        </Button>
    </View>;

LightButton.propTypes = {
    name: PropTypes.string,
    onPress: PropTypes.func,
    color: PropTypes.string,
    style: PropTypes.object,
    text: PropTypes.string.isRequired,
};

LightButton.defaultProps = {
    style: {},
    name: null,
    onPress: null,
    color: theme.secondary
};

export default LightButton;
