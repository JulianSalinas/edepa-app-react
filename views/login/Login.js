// Core 
import React from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View } from 'react-native';

// Local 
import Logo from '../../shared/unique/Edepa';
import GoogleButton from '../../shared/buttons/Google';
import FacebookButton from '../../shared/buttons/Facebook';


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
        <Logo color={props.darkMode ? "#FFF" : null} />
    </StyledItem>

const LoginButtons = props =>
    <StyledItem>
        <GoogleButton {...props} style={{ marginBottom: 12 }} />
        <FacebookButton {...props} />
    </StyledItem>

const Login = props =>
    <StyledLayout>
        <LoginLogo {...props} />
        <LoginButtons {...props} />
    </StyledLayout>

Login.propTypes = {
    darkMode: PropTypes.bool
}

Login.defaultProps = {
    darkMode: true
}

export default Login;