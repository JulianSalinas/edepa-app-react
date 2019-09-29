import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../../customs/Edepa';
import GoogleButton from '../../shared/buttons/GoogleButton';
import FacebookButton from '../../shared/buttons/FacebookButton';

import styled from 'styled-components/native';
import { View } from 'react-native';


const LoginItem = styled(View)`
    margin-bottom: 16px
`

const StyledView = styled(View)`
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

const LogínContent = props => 
    <StyledView>
        <LoginLogo {...props}/>
        <LoginButtons {...props}/>
    </StyledView>

LogínContent.propsTypes = {
    darkMode: PropTypes.bool.isRequired
}

export default LogínContent;
