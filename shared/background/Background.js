import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';
import { gradient } from '../../scripts/Color';

import { Platform, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const PaintedView = styled(LinearGradient)`
    flex: 1;
`

const StyledView = styled(View)`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const BackgroundDefault = props => 
    <StyledView style={props.style}>
        { props.children }
    </StyledView>

const BackgroundDark = props =>
    <StyledView>
        <PaintedView start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            colors={[props.darkPrimary, props.darkSecondary]}>
            <BackgroundDefault {...props} />
        </PaintedView>
    </StyledView>

const BackgroundMobile = props => props.darkMode ?
    <BackgroundDark {...props} /> :
    <BackgroundDefault {...props} style={{
        backgroundColor: '#FFFFFF'
    }} />

const Background = props => Platform.OS === 'android' || Platform.OS === 'ios' ?
    <BackgroundMobile {...props} /> :
    <BackgroundDefault {...props} style={!props.darkMode ? {} : {
        backgroundImage: gradient(props.darkPrimary, props.darkSecondary)
    }} />

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