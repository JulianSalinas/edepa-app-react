// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { useTheme } from 'react-navigation';
import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';


const ButtonShadow = {
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
        style={[props.style, { backgroundColor }, ButtonShadow]}>
        <ButtonIcon color={props.color} />
        <ButtonText color={props.color} />
    </StyledButton>

const ButtonLayout = props =>
    <ButtonView
        {...props}
        color={props.darkMode ? '#FFFFFF' : '#3B5998'}
        backgroundColor={props.darkMode ? '#3B5998' : '#FFFFFF'}
    />

const FacebookButton = props => {
    const darkMode = useTheme() === 'dark';
    return <ButtonLayout {...props} darkMode={darkMode} />
}

FacebookButton.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func,
}

FacebookButton.defaultProps = {
    style: {},
    onClick: () => console.log('Facebook button pressed!')
}

export default memo(FacebookButton);

