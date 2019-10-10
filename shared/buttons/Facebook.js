// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';


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
    borderRadius: 24;
    paddingHorizontal: 24;
    display: flex;
    alignItems: center;
    flexDirection: row;
    justifyContent: flex-start;
    boxShadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
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

