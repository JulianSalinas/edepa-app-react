// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View } from 'react-native';
import { useTheme } from 'react-navigation';

// Local 
import Logo from '../../../shared/Edepa';
import Google from '../../../shared/buttons/Google';
import Facebook from '../../../shared/buttons/Facebook';


const StyledLayout = styled(View)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LoginLayout = props =>
    <StyledLayout>
        <Logo color={props.darkMode ? '#FFF' : null} />
        <Google onClick={props.login} style={{ margin: 16 }} />
        <Facebook onClick={props.login} />
    </StyledLayout>

const Login = props => {
    const darkMode = useTheme() === 'dark';
    return <LoginLayout {...props} darkMode={darkMode} />
}

Login.propTypes = {
    login: PropTypes.func.isRequired
}

Login.defaultProps = {
    login: () => console.warn('Required function: login')
}

export default memo(Login);