import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';
import { gradient } from '../../scripts/Color';

import { Platform, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const StyledView = styled(View)`
    display: flex;
    flexDirection: column;
    justifyContent: flex-start;
`

const StyledGradient = styled(LinearGradient)`
    display: flex;
    flexDirection: column;
    justifyContent: flex-start;
`

const DefaultView = props => 
    <StyledView style={props.style}>
        { props.children }
    </StyledView>

const DarkWeb = props => 
    <StyledView style={[props.style, {
        backgroundImage: gradient(props.darkPrimary, props.darkSecondary)
    }]}>
        { props.children }
    </StyledView>

const DarkMobile = props =>
    <StyledGradient
        style={props.style}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        colors={[props.darkPrimary, props.darkSecondary]}>
        { props.children }
    </StyledGradient>

const BackgroundWeb = props => props.darkMode ? 
    <DarkWeb {...props} /> : 
    <DefaultView {...props} /> 

const BackgroundMobile = props => props.darkMode ?
    <DarkMobile {...props} /> :
    <DefaultView {...props} />

const Background = props => Platform.OS === 'web' ?
    <BackgroundWeb {...props} /> : 
    <BackgroundMobile {...props} />

Background.propsTypes = {
    darkMode: PropTypes.bool.isRequired,
    darkPrimary: PropTypes.string.isRequired,
    darkSecondary: PropTypes.string.isRequired
}

Background.defaultProps = {
    darkMode: true,
    darkPrimary: '#e96443',
    darkSecondary: '#904e95'
}

export default Background;