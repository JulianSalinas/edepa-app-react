// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Platform, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Local 
import { gradient } from '../../scripts/Color';


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
        {props.children}
    </StyledView>

const DarkWeb = props =>
    <StyledView onLayout={props.onLayout} style={[props.style, {
        backgroundImage: gradient(props.darkPrimary, props.darkSecondary)
    }]}>
        {props.children}
    </StyledView>

const DarkMobile = props =>
    <StyledGradient
        onLayout={props.onLayout}
        style={props.style}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        colors={[props.darkPrimary, props.darkSecondary]}>
        {props.children}
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
    darkMode: PropTypes.bool,
    darkPrimary: PropTypes.string,
    darkSecondary: PropTypes.string,
    onLayout: PropTypes.func
}

Background.defaultProps = {
    darkMode: true,
    darkPrimary: '#e96443',
    darkSecondary: '#904e95',
    onLayout: () => {}
}

export default memo(Background);