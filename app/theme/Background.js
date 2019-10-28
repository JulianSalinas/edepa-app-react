// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Platform, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Local 
import Theme from './Theme';
import { gradient } from '../../scripts/Color';


const BackgroundImage = ({ style, darkBackground }) => ([style, {
    backgroundImage: gradient(darkBackground[0], darkBackground[1], darkBackground[2])
}])

const StyledView = styled(View)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const LightBackground = props =>
    <StyledView style={props.style}>
        {props.children}
    </StyledView>

const WebBackground = props =>
    <StyledView onLayout={props.onLayout} style={BackgroundImage(props)}>
        {props.children}
    </StyledView>

const StyledGradient = styled(LinearGradient)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const MobileBackground = props =>
    <StyledGradient
        onLayout={props.onLayout}
        style={props.style}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
        colors={props.darkBackground}>
        {props.children}
    </StyledGradient>

const BackgroundLayout = props => !props.darkMode ?
    <LightBackground {...props} /> : Platform.OS === 'web' ?
        <WebBackground {...props} /> :
        <MobileBackground {...props} />

const Background = props => {
    const isString = typeof (props.darkBackground) === 'string';
    let background = isString ? [props.darkBackground, props.darkBackground] : props.darkBackground;
    return <BackgroundLayout {...props} darkBackground={background} />
}

Background.propsTypes = {
    style: PropTypes.object,
    onLayout: PropTypes.func,
    darkMode: PropTypes.bool,
    darkBackground: PropTypes.string || PropTypes.arrayOf(PropTypes.string)
}

Background.defaultProps = {
    style: {},
    darkMode: true,
    darkBackground: Theme.darkBackground
}

export default memo(Background);