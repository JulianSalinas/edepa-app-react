// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { Text, View } from 'react-native';


const buttonShadow = {
    elevation: 5,
    shadowColor: "#000",
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 }
}

const ButtonIcon = ({ color }) =>
    <Entypo
        size={24}
        color={color}
        name='facebook'
        style={{ marginEnd: 16 }}
    />

const StyledText = styled(Text)`
    font-size: 10;
    letter-spacing: 2.4;
    text-transform: uppercase;
`

const ButtonText = ({ color }) =>
    <StyledText style={{ color }}>
        Login with Facebook
    </StyledText>

const StyledButton = styled(View)`
    height: 48;
    border-radius: 24;
    padding-left: 24;
    padding-right: 24;
    display: flex;
    align-items: center;
    flex-direction: row;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`

const ButtonView = ({ backgroundColor, ...props }) =>
    <StyledButton
        onClick={props.onClick}
        style={[props.style, { backgroundColor }, buttonShadow]}>
        <ButtonIcon color={props.color} />
        <ButtonText color={props.color} />
    </StyledButton>

const FacebookButton = props =>
    <ButtonView
        {...props}
        color={props.darkMode ? '#FFFFFF' : '#3B5998'}
        backgroundColor={props.darkMode ? '#3B5998' : '#FFFFFF'}
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

export default memo(FacebookButton);

