// Core 
import React, { memo, PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { Button, View, TextInput, ActivityIndicator } from 'react-native';

// Local 
import Flat from '../../../colors/Flat';
import Logo from '../../../shared/Edepa';
import JButton from '../../../shared/JButton';
import { withContext } from '../../../app/AppContext';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Caption } from 'react-native-paper';
import Google from '../../../shared/Google';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Indicator = props =>
    <ActivityIndicator
        size={"small"}
        color={props.darkMode ? '#FFF' : props.color}
    />

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
    <TouchableOpacity onPress={props.onPress}>
        <MaterialCommunityIcons
            size={24}
            color={props.color}
            name={'key'}
            style={{ marginEnd: 16 }}
        />
    </TouchableOpacity>

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
            placeholder={'Email'}
            onChangeText={props.onEmailChange}
            style={{ flex: 1, color: props.palette.primaryFont }}
        />
    </View>

const PasswordInputLayout = props =>
    <View style={[InputStyle, {
        marginBottom: 8,
        backgroundColor: props.palette.secondaryItem,
    }]}>
        <PasswordIcon {...props} color={props.palette.primaryFont} />
        <TextInput
            secureTextEntry={props.secureTextEntry}
            value={props.password}
            placeholder={'Contraseña'}
            onChangeText={props.onPasswordChange}
            style={{ flex: 1, color: props.palette.primaryFont }}
        />
    </View>

class PasswordInput extends PureComponent {

    state = {
        secureTextEntry: true
    }

    onPress = () => {
        this.setState(state => ({ secureTextEntry: !state.secureTextEntry }));
    }

    render() {
        return <PasswordInputLayout
            {...this.props}
            onPress={this.onPress}
            secureTextEntry={this.state.secureTextEntry}
        />
    }

}

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

const LoginResetPassword = props =>
    <TouchableOpacity onPress={props.resetPassword}>
        <Caption style={{ color: Flat.PETER_RIVER, textAlign: 'center' }}>
            {'¿Has olvidado tu contraseña?'}
        </Caption>
    </TouchableOpacity>

const LoginControls = props =>
    <View style={{ marginTop: 16 }}>
        <EmailInput {...props} />
        <PasswordInput {...props} />
        <LoginButtons {...props} />
        <LoginAlternativeCaption {...props} />
        <Google icon={GoogleIcon} onClick={props.login('Google')} style={{ marginBottom: 12 }} />
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
    signup: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    resetPassword: PropTypes.func.isRequired
}

export default withContext(memo(Login));