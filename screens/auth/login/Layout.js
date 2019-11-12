// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View } from 'react-native';

// Local 
import Logo from '../../../shared/Edepa';
import Google from '../../../shared/JButton';
import { withContext } from '../../../app/AppContext';
import { FontAwesome } from '@expo/vector-icons';

const GoogleIcon = () =>
    <FontAwesome
        size={24}
        color={'#FFF'}
        name={'google'}
        style={{ marginEnd: 16 }}
    />

const StyledLogin = styled(View)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Login = props =>
    <StyledLogin>
        <Logo darkMode={props.darkMode} color={props.palette.foreground}/>
        <Google icon={GoogleIcon} onClick={props.login} style={{ marginTop: 16 }}/>
    </StyledLogin>

Login.propTypes = {
    login: PropTypes.func.isRequired
}

Login.defaultProps = {
    login: () => console.warn('Required function: login')
}

export default withContext(memo(Login));