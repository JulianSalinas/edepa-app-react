// Core 
import PropTypes from 'prop-types';
import React, { memo } from 'react';

// Libs
import styled from 'styled-components/native';
import { View } from 'react-native';
import { Caption } from 'react-native-paper';

// Local 
import WelcomeLogo from '../../../shared/Edepa';
import { withContext } from '../../../app/AppContext';


const WelcomeText = props =>
    <Caption style={{ color: props.palette.secondaryFont }}>
        {props.text}
    </Caption>

const StyledWelcome = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Welcome = props =>
    <StyledWelcome>
        <WelcomeLogo darkMode={props.darkMode} color={props.palette.foreground} />
        <WelcomeText {...props} />
    </StyledWelcome>

Welcome.propTypes = {
    text: PropTypes.string
}

Welcome.defaultProps = {
    text: 'Bienvenido'
}

export default withContext(memo(Welcome));