import React from 'react';
import PropTypes from 'prop-types';
import Background from '../../shared/background/Background';

import { Store } from '../../app/Types';
import Logo from '../../customs/Edepa';
import Modder from '../../shared/modder/Modder';
import GoogleButton from '../../shared/buttons/GoogleButton';
import FacebookButton from '../../shared/buttons/FacebookButton';

import styled from 'styled-components/native';
import { View } from 'react-native';
import { Container } from 'native-base';


const LoginItem = styled(View)`
    margin-bottom: 16
`

const StyledContent = styled(View)`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LoginLogo = props => 
    <LoginItem>
        <Logo color={props.darkMode ? "#FFF" : null }/>  
    </LoginItem>

const LoginButtons = props => 
    <LoginItem>
        <GoogleButton darkMode={props.darkMode} style={{ marginBottom: 12 }}/>           
        <FacebookButton darkMode={props.darkMode}/>      
    </LoginItem>

const LoginContent = props => 
    <StyledContent>
        <LoginLogo {...props}/>
        <LoginButtons {...props}/>
    </StyledContent>

const LoginView = ({ darkMode, changeDarkMode, ...props }) => 
    <Background darkMode={darkMode} {...props}>
        <LoginContent darkMode={darkMode} />
        <Modder darkMode={darkMode} changeDarkMode={changeDarkMode} />
    </Background>

const LoginLayout = props => 
    <LoginView         
        darkMode={props.kFeel.isDarkMode()}
        darkPrimary={props.kFeel.darkPrimary}
        darkSecondary={props.kFeel.darkSecondary}
        changeDarkMode={props.kFeel.changeDarkMode}
    />

const LoginScreen = props => 
    <Container>
        <LoginLayout {...props.screenProps} />
    </Container>

LoginScreen.propTypes = {
    screenProps: Store,
    navigation: PropTypes.object.isRequired
}

export default LoginScreen;