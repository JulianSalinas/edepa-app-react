// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View, TextInput } from 'react-native';

// Local 
import Flat from '../../../colors/Flat';
import Logo from '../../../shared/Edepa';
import JButton from '../../../shared/JButton';
import { withContext } from '../../../app/AppContext';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Caption } from 'react-native-paper';
import Google from '../../../shared/Google';


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

const StyledLogin = styled(View)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InputStyle = {
    height: 48,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 24,
    paddingHorizontal: 24,
}

const EmailInput = props =>
    <View style={[InputStyle, {
        marginBottom: 8,
        backgroundColor: props.palette.secondaryItem,
    }]}>
        <EmailIcon color={props.palette.primaryFont} />
        <TextInput
            value={props.email}
            placeholder={'email'}
            onChangeText={props.onEmailChange}
            style={{ flex: 1, color: props.palette.primaryFont }}
        />
    </View>

const PasswordInput = props =>
    <View style={[InputStyle, {
        marginBottom: 8,
        backgroundColor: props.palette.secondaryItem,
    }]}>
        <PasswordIcon color={props.palette.primaryFont} />
        <TextInput
            secureTextEntry={true}
            value={props.password}
            placeholder={'contraseña'}
            onChangeText={props.onPasswordChange}
            style={{ flex: 1, color: props.palette.primaryFont }}
        />
    </View>

const StyledButtons = styled(View)`
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
`

const LoginButtons = props =>
    <StyledButtons>
        <JButton
            color={Flat.WET_ASPHALT}
            text={'Ingresar'}
            onClick={props.login('Email')}
            style={{ flex: 1, marginEnd: 8 }}
        />
        <JButton
            color={Flat.MIDNIGHT_BLUE}
            text={'Registrar'}
            onClick={props.signup}
            style={{ flex: 1 }}
        />
    </StyledButtons>

const LoginAlternativeCaption = props =>
    <Caption style={{ color: props.palette.primaryFont, textAlign: 'center', marginBottom: 12 }}>
        {'》Ó puedes'}
    </Caption>

const LoginControls = props =>
    <View style={{ marginTop: 16 }}>
        <EmailInput {...props} />
        <PasswordInput {...props} />
        <LoginButtons {...props} />
        <LoginAlternativeCaption {...props} />
        <Google icon={GoogleIcon} onClick={props.login('Google')} style={{ marginBottom: 8 }} />
    </View>

const Login = props =>
    <StyledLogin>
        <Logo darkMode={props.darkMode} color={props.palette.foreground} />
        <LoginControls {...props} />
    </StyledLogin>

Login.propTypes = {
    login: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired
}

export default withContext(memo(Login));