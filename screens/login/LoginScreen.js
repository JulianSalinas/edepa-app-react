import React from 'react';
import PropTypes from 'prop-types';

import { Screen } from '../../app/Types';
import DarkModder from '../../shared/modder/DarkModder';

import Logo from '../../customs/Edepa';
import GoogleButton from '../../shared/buttons/GoogleButton';
import FacebookButton from '../../shared/buttons/FacebookButton';

import styled from 'styled-components/native';
import { View } from 'react-native';


const StyledItem = styled(View)`
    marginBottom: 16
`

const StyledLayout = styled(View)`
    flex: 1;
    display: flex;
    alignItems: center;
    justifyContent: center;
`

const LoginLogo = props => 
    <StyledItem>
        <Logo color={props.darkMode ? "#FFF" : null }/>  
    </StyledItem>

const LoginButtons = props => 
    <StyledItem>
        <GoogleButton darkMode={props.darkMode} style={{ marginBottom: 12 }}/>           
        <FacebookButton darkMode={props.darkMode}/>      
    </StyledItem>

const LoginLayout = props => 
    <StyledLayout>
        <LoginLogo {...props}/>
        <LoginButtons {...props}/>
    </StyledLayout>

const LoginModded = props => 
    <DarkModder {...props} style={{ flex: 1 }}>
        <LoginLayout {...props}/>
    </DarkModder>

const LoginScreen = props => <LoginModded 
    darkMode={props.screenProps.kFeel.isDarkMode()} 
    changeDarkMode={props.screenProps.kFeel.changeDarkMode}
/>

LoginScreen.propTypes = {
    screenProps: Screen,
    navigation: PropTypes.object.isRequired
}

export default LoginScreen;