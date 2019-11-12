// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View, TouchableHighlight } from 'react-native';
import { Platform } from '@unimodules/core';
import Flat from '../colors/Flat';


const ButtonShadow = {
    elevation: 5,
    shadowColor: "#000",
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 }
}

const StyledText = styled(Text)`
    color: #FFF;
    font-size: 10;
    letter-spacing: 2.4;
    text-transform: uppercase;
`

const ButtonText = props =>
    <StyledText>
        {props.text}
    </StyledText>
    
const ButtonStyle = {
    height: 48,
    borderRadius: 24,
    paddingHorizontal: 24,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
}

const ButtonContent = props => 
    <>
        <props.icon />
        <ButtonText {...props}/>
    </>

const GoogleButton = props => {

    const ButtonComponent = Platform.OS === 'web' ? View : TouchableHighlight;

    return <ButtonComponent
        onPress={props.onClick}
        onClick={props.onClick}
        style={[props.style, { backgroundColor: props.color }, ButtonStyle, ButtonShadow]}>
        <ButtonContent {...props}/>
    </ButtonComponent>

}

GoogleButton.propTypes = {
    style: PropTypes.object,
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

GoogleButton.defaultProps = {
    style: {},
    color: Flat.GOOGLE,
    text: 'Sign in with Google',
    onClick: () => console.log('Google button pressed!')
}

export default memo(GoogleButton);

