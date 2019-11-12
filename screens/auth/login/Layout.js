// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View, TextInput } from 'react-native';

// Local 
import Logo from '../../../shared/Edepa';
import Google from '../../../shared/JButton';
import { withContext } from '../../../app/AppContext';
import { FontAwesome, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';


const GoogleIcon = () =>
    <FontAwesome
        size={24}
        color={'#FFF'}
        name={'google'}
        style={{ marginEnd: 16 }}
    />

const EmailIcon = props =>
    <MaterialCommunityIcons
        size={16}
        color={props.color}
        name={'mail-ru'}
        style={{ marginEnd: 16 }}
    />

const PasswordIcon = props =>
    <MaterialCommunityIcons
        size={16}
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
    borderRadius: 24,
    paddingHorizontal: 24,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
}

const Login = props =>
    <StyledLogin>
        <Logo darkMode={props.darkMode} color={props.palette.foreground}/>

        <View style={{ marginTop: 16 }}>

            <View style={[InputStyle, {
                marginBottom: 8,
                backgroundColor: props.palette.secondaryItem,
            }]}>
                <EmailIcon color={props.palette.primaryFont}/>
                <TextInput
                    style={{
                        flex: 1,
                        color: props.palette.primaryFont,
                    }}
                    placeholder={'email'}
                    value={props.email}
                    onChangeText={props.onEmailChange}
                />  
            </View>

            <View style={[InputStyle, {
                marginBottom: 16,
                backgroundColor: props.palette.secondaryItem,
            }]}>
                <PasswordIcon color={props.palette.primaryFont}/>
                <TextInput
                    style={{
                        flex: 1,
                        color: props.palette.primaryFont,
                    }}
                    placeholder={'contraseña'}
                    value={props.password}
                    secureTextEntry={true}
                    onChangeText={props.onPasswordChange}
                />  
            </View>

            
            <Google icon={GoogleIcon} onClick={props.login}/>

        </View>

    </StyledLogin>

Login.propTypes = {
    login: PropTypes.func.isRequired, 
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired
}

export default withContext(memo(Login));