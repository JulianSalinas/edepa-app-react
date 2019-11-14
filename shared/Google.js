// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';

// Local 
import Flat from '../colors/Flat';
import { withContext } from '../app/AppContext';


const ButtonShadow = {
    elevation: 5,
    shadowColor: "#000",
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 }
}

const StyledText = styled(Text)`
    color: #FFF;
    font-size: 10;
    letter-spacing: 2.4;
    text-transform: uppercase;
`

const ButtonText = props =>
    <StyledText>
        {props.text}
    </StyledText>

const ButtonStyle = {
    height: 48,
    borderRadius: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
}

const ButtonContent = props =>
    <>
        {props.icon ? <props.icon /> : null}
        <ButtonText {...props} />
    </>

const GoogleButton = props => 
    <TouchableOpacity
        onPress={props.onClick}
        style={[props.style, ButtonStyle, ButtonShadow, {
            borderColor: props.color,
            backgroundColor: props.color,
            paddingHorizontal: props.icon ? 24 : 16
        }]}>
        <ButtonContent {...props} />
    </TouchableOpacity>

GoogleButton.propTypes = {
    icon: PropTypes.func,
    style: PropTypes.object,
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

GoogleButton.defaultProps = {
    style: {},
    color: Flat.GOOGLE,
    text: 'Ingresar con Google',
    onClick: () => console.log('Google button pressed!')
}

export default withContext(memo(GoogleButton));
