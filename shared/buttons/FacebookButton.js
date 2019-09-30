import React from 'react';
import PropTypes from 'prop-types';

import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';


const buttonSize = {
    height: 48,
    borderRadius: 24,
    paddingHorizontal: 24
}

const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
}

const textStyle = {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2.4,
    textTransform: 'uppercase'
}

const ButtonIcon = ({ color }) =>
    <Entypo
        size={24}
        color={color}
        name='facebook'
        style={{ marginEnd: 16 }}
    />

const ButtonText = ({ color }) =>
    <Text style={[textStyle, { color }]}>
        Login with Facebook
    </Text>

const ButtonView = ({ backgroundColor, ...props }) =>
    <View
        onClick={props.onClick}
        style={[props.style, buttonStyle, buttonSize, { backgroundColor }]}>
        <ButtonIcon color={props.color} />
        <ButtonText color={props.color} />
    </View>

const FacebookButton = props =>
    <ButtonView
        {...props}
        color={props.darkMode ? '#3B5998' : '#FFFFFF'}
        backgroundColor={props.darkMode ? '#FFFFFF' : '#3B5998'}
    />

FacebookButton.propTypes = {
    darkMode: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object
}

FacebookButton.defaultProps = {
    darkMode: false,
    onClick: () => console.log('Facebook button pressed!'),
    style: {}
}

export default FacebookButton;

