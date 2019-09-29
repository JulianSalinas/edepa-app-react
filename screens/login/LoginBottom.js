import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';
import { View, Text, Switch } from 'react-native';


const StyledView = styled(View)`
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #2c3e50
`

const StyledText = styled(Text)`
    color: #FFF;
    margin-end: 12px;
    font-size: 12px;
    letter-spacing: 2.5;
    text-transform: uppercase;
`

const LoginBottom = props => 
    <StyledView>
        <StyledText>Dark Mode</StyledText>
        <Switch value={props.darkMode} onValueChange={props.changeDarkMode}/>
    </StyledView>

LoginBottom.propsTypes = {
    darkMode: PropTypes.bool.isRequired,
    changeDarkMode: PropTypes.func.isRequired
}

export default LoginBottom;