import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const buttonShadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
}

const StyledButton = styled(View)`
    height: 48;
    border-radius: 24;
    padding-horizontal: 24;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
`

const StyledText = styled(Text)`
    fontSize: 10;
    letterSpacing: 2.4;
    textTransform: uppercase;
`

const ButtonIcon = ({ color }) =>
    <FontAwesome
        size={24}
        color={color}
        name='google'
        style={{ marginEnd: 16 }}
    />

const ButtonText = ({ color }) =>
    <StyledText style={{ color }}>
        Sign in with Google
    </StyledText>

const ButtonView = ({ backgroundColor, ...props }) =>
    <StyledButton
        onClick={props.onClick}
        style={[props.style, { backgroundColor }, buttonShadow]}>
        <ButtonIcon color={props.color} />
        <ButtonText color={props.color} />
    </StyledButton>

const GoogleButton = props =>
    <ButtonView
        {...props}
        color={props.darkMode ? '#FFFFFF' : '#d34836'}
        backgroundColor={props.darkMode ? '#d34836' : '#FFFFFF'}
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

