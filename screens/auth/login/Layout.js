// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { Caption } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

// Local 
import Flat from '../../../colors/Flat';
import Logo from '../../../shared/Edepa';
import UInput from '../../../shared/UInput';
import JButton from '../../../shared/JButton';
import GoogleButton from '../../../shared/Google';
import { withContext } from '../../../app/AppContext';


const GoogleIcon = () =>
    <FontAwesome
        size={24}
        color={'#FFF'}
        name={'google'}
        style={{ marginEnd: 16 }}
    />

const EmailIcon = props =>
    <MaterialCommunityIcons
        size={24}
        color={props.color}
        name={'mail-ru'}
        style={{ marginEnd: 16 }}
    />

const PasswordIcon = props =>
    <MaterialCommunityIcons
        size={24}
        color={props.color}
        name={'key'}
        style={{ marginEnd: 16 }}
    />

const EmailInput = props => 
    <UInput 
        icon={EmailIcon} 
        value={props.email}
        placeholder={'Email'}
        onChangeText={props.onEmailChange}
    />

const PasswordInput = props => 
    <UInput 
        isPrivate 
        icon={PasswordIcon} 
        value={props.password} 
        placeholder={'Contraseña'}
        onChangeText={props.onPasswordChange}   
    />

const LoginEnterButton = props => 
    <JButton
        color={Flat.WET_ASPHALT}
        text={'Ingresar'}
        onClick={() => props.login('Email')}
        style={{ flex: 1, marginEnd: 8 }}
    />

const LoginSignUpButton = props => 
    <JButton
        color={Flat.MIDNIGHT_BLUE}
        text={'Registrar'}
        onClick={props.signUp}
        style={{ flex: 1 }}
    />

const StyledAccess = styled(View)`
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
`

const LoginAccess = props =>
    <StyledAccess>
        <LoginEnterButton {...props}/>
        <LoginSignUpButton {...props}/>
    </StyledAccess>

const StyledAlternative = styled(Caption)`
    text-align: center;
    margin-bottom: 12px;
`

const LoginAlternative = props =>
    <StyledAlternative style={{ color: props.palette.primaryFont }}>
        {'Ó puedes'}
    </StyledAlternative>

const LoginGoogle = props => 
    <GoogleButton 
        icon={GoogleIcon} 
        onClick={() => props.login('Google')} 
        style={{ marginBottom: 12, width: 245 }} 
    />

const LoginResetCaption = () => 
    <Caption style={{ color: Flat.PETER_RIVER, textAlign: 'center' }}>
        {'¿Has olvidado tu contraseña?'}
    </Caption>

const LoginResetPassword = props =>
    <TouchableOpacity onPress={props.resetPassword}>
        <LoginResetCaption />
    </TouchableOpacity>

const LoginControls = props =>
    <View style={{ marginTop: 16 }}>
        <EmailInput {...props}/>
        <PasswordInput {...props}/>
        <LoginAccess {...props} />
        <LoginAlternative {...props} />
        <LoginGoogle {...props} />
        <LoginResetPassword {...props} />
    </View>

const StyledLogin = styled(View)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Login = props =>
    <StyledLogin>
        <Logo darkMode={props.darkMode} color={props.palette.foreground} />
        <LoginControls {...props} />
    </StyledLogin>

Login.propTypes = {
    login: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    resetPassword: PropTypes.func.isRequired
}

export default withContext(memo(Login));