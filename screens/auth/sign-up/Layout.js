// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { Caption, Headline } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Local 
import Flat from '../../../colors/Flat';
import UInput from '../../../shared/UInput';
import JButton from '../../../shared/JButton';
import { withContext } from '../../../app/AppContext';


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

const ConfirmationIcon = props =>
    <MaterialCommunityIcons
        size={24}
        color={props.color}
        name={'chevron-right-circle-outline'}
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

const ConfirmationInput = props => 
    <UInput 
        isPrivate 
        icon={ConfirmationIcon} 
        value={props.confirmation} 
        placeholder={'Confirma la contraseña'}
        onChangeText={props.onConfirmationChange}   
    />

const SignUpEnterButton = props => 
    <JButton
        color={Flat.GOOGLE}
        text={'Crear cuenta'}
        onClick={props.signUp}
        style={{ marginBottom: 12, width: 245 }}
    />

const SignUpBackCaption = () => 
    <Caption style={{ color: Flat.PETER_RIVER, textAlign: 'center' }}>
        {'¿Ya tienes una cuenta?'}
    </Caption>

const SignUpBackButton = props => 
    <TouchableOpacity onPress={props.back}>
        <SignUpBackCaption />
    </TouchableOpacity>

const SignUpControls = props =>
    <View style={{ marginTop: 16 }}>
        <EmailInput {...props}/>
        <PasswordInput {...props}/>
        <ConfirmationInput {...props}/>
        <SignUpEnterButton {...props}/>
        <SignUpBackButton {...props}/>
    </View>

const StyledSignUpHeadline = styled(View)`
    width: 245;
    padding-left: 4px;
`

const SignUpHeadline = props => 
    <StyledSignUpHeadline>
        <Headline style={{ color: props.palette.primaryFont }}>
            Crear cuenta
        </Headline>
    </StyledSignUpHeadline>

const StyledSignUp = styled(View)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SignUp = props =>
    <StyledSignUp>
        <SignUpHeadline {...props}/>
        <SignUpControls {...props} />
    </StyledSignUp>

SignUp.propTypes = {
    back: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmation: PropTypes.string.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onConfirmationChange: PropTypes.func.isRequired,
}

export default withContext(memo(SignUp));