import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';


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
    <Entypo
        size={24}
        color={color}
        name='facebook'
        style={{ marginEnd: 16 }}
    />

const ButtonText = ({ color }) =>
    <StyledText style={{ color }}>
        Login with Facebook
    </StyledText>

const ButtonView = ({ backgroundColor, ...props }) =>
    <StyledButton
        onClick={props.onClick}
        style={[props.style, { backgroundColor }]}>
        <ButtonIcon color={props.color} />
        <ButtonText color={props.color} />
    </StyledButton>

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

