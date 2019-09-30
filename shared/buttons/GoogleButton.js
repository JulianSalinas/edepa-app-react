import React from 'react';
import PropTypes from 'prop-types';

import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


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
    <FontAwesome
        size={24}
        color={color}
        name='google'
        style={{ marginEnd: 16 }}
    />

const ButtonText = ({ color }) =>
    <Text style={[textStyle, { color }]}>
        Sign in with Google
    </Text>

const ButtonView = ({ backgroundColor, ...props }) =>
    <View
        onClick={props.onClick}
        style={[props.style, buttonStyle, buttonSize, { backgroundColor }]}>
        <ButtonIcon color={props.color} />
        <ButtonText color={props.color} />
    </View>

const GoogleButton = props =>
    <ButtonView
        {...props}
        color={props.darkMode ? '#d34836' : '#FFFFFF'}
        backgroundColor={props.darkMode ? '#FFFFFF' : '#d34836'}
    />

GoogleButton.propTypes = {
    darkMode: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object
}

GoogleButton.defaultProps = {
    darkMode: false,
    onClick: () => console.log('Google button pressed!'),
    style: {}
}

export default GoogleButton;

