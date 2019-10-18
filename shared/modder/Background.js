// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Platform, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Local 
import Theme from '../../app/Theme';
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

const BackgroundImage = props => ([props.style, {
    backgroundImage: gradient('#234', '#234')
}])

const LightBackground = props =>
    <StyledView style={props.style}>
        {props.children}
    </StyledView>

const WebBackground = props =>
    <StyledView onLayout={props.onLayout} style={BackgroundImage(props)}>
        {props.children}
    </StyledView>

const MobileBackground = props =>
    <StyledGradient
        onLayout={props.onLayout}
        style={props.style}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        colors={props.darkBackground}>
        {props.children}
    </StyledGradient>

const Background = props => !props.darkMode ?
    <LightBackground {...props} /> : Platform.OS === 'web' ? 
    <WebBackground {...props} /> : 
    <MobileBackground {...props} />

Background.propsTypes = {
    style: PropTypes.object,
    onLayout: PropTypes.func,
    darkMode: PropTypes.bool,
    darkBackground: PropTypes.arrayOf(PropTypes.string)
}

Background.defaultProps = {
    style: {},
    darkMode: true,
    darkBackground: Theme.darkBackground
}

export default memo(Background);