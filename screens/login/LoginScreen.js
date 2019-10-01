import React from 'react';
import PropTypes from 'prop-types';

import { Store } from '../../app/Types';
import LoginBottom from './LoginBottom';
import LoginContent from './LoginContent';

import styled from 'styled-components/native';
import { gradient } from '../../scripts/Color';

import { Container } from 'native-base';
import { Platform, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const PaintedView = styled(LinearGradient)`
    flex: 1;
`

const StyledView = styled(View)`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const LoginDefault = ({ darkMode, changeDarkMode, style }) =>
    <StyledView style={style}>
        <LoginContent darkMode={darkMode} />
        <LoginBottom darkMode={darkMode} changeDarkMode={changeDarkMode} />
    </StyledView>

const LoginDark = props =>
    <StyledView>
        <PaintedView start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            colors={[props.darkPrimary, props.darkSecondary]}>
            <LoginDefault {...props} />
        </PaintedView>
    </StyledView>

const LoginMobile = props => props.darkMode ?
    <LoginDark {...props} /> :
    <LoginDefault {...props} style={{
        backgroundColor: '#FFFFFF'
    }} />

const LoginView = props => props.mobileMode ?
    <LoginMobile {...props} /> :
    <LoginDefault {...props} style={!props.darkMode ? {} : {
        backgroundImage: gradient(props.darkPrimary, props.darkSecondary)
    }} />

const LoginPlatform = props =>
    <LoginView
        {...props}
        darkMode={props.kFeel.isDarkMode()}
        darkPrimary={props.kFeel.darkPrimary}
        darkSecondary={props.kFeel.darkSecondary}
        changeDarkMode={props.kFeel.changeDarkMode}
        mobileMode={Platform.OS === 'android' || Platform.OS === 'ios'}
    />

const LoginScreen = props => 
    <Container>
        <LoginPlatform {...props} {...props.screenProps}/>
    </Container>

LoginScreen.propTypes = {
    screenProps: Store,
    navigation: PropTypes.object.isRequired
}

export default LoginScreen;