import React from 'react';

import LoginBottom from './LoginBottom';
import LoginContent from './LoginContent';

import styled from 'styled-components/native';
import { gradient } from '../../scripts/Color';
import { withContext, contextTypes } from '../../app/Context';

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
            colors={[props.custom.darkPrimary, props.custom.darkSecondary]}>
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
        backgroundImage: gradient(props.custom.darkPrimary, props.custom.darkSecondary)
    }} />

const LoginPlatform = props =>
    <LoginView
        {...props}
        mobileMode={Platform.OS === 'android' || Platform.OS === 'ios'}
        darkMode={props.store.darkMode}
        changeDarkMode={props.engine.changeDarkMode}
    />

const LoginScreen = props =>
    <Container>
        <LoginPlatform {...props} />
    </Container>

LoginScreen.propTypes = contextTypes;

export default withContext(LoginScreen);