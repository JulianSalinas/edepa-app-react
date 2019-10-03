import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const StyledButton = styled(View)`
    height: 48;
    border-radius: 24;
    padding-horizontal: 24;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
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
        style={[props.style, { backgroundColor }]}>
        <ButtonIcon color={props.color} />
        <ButtonText color={props.color} />
    </StyledButton>

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

