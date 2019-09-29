import React from 'react';

import LoginBottom from './LoginBottom';
import LoginContent from './LoginContent';

import { gradient } from '../../scripts/Color';
import { withContext, contextTypes } from '../../app/Context';

import styled from 'styled-components/native';
import { Container } from 'native-base';


const StyledView = styled(Container)`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const darkModeStyle = {
    backgroundImage: gradient('#ee0979', '#ff6a00')
}

const lightModeStyle = {
    backgroundColor: '#FFFFFF'
}

const LoginView = ({ darkMode, changeDarkMode }) => 
    <StyledView style={darkMode ? darkModeStyle : lightModeStyle}>
        <LoginContent darkMode={darkMode} />
        <LoginBottom darkMode={darkMode} changeDarkMode={changeDarkMode}/>
    </StyledView>

const LoginScreen = props => 
    <LoginView 
        darkMode={props.store.darkMode} 
        changeDarkMode={props.engine.changeDarkMode}
    />

LoginScreen.propTypes = contextTypes;

export default withContext(LoginScreen);