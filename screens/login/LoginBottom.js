import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';
import { View, Text, Switch } from 'react-native';


const StyledView = styled(View)`
    padding: 8px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #2c3e50
`

const StyledText = styled(Text)`
    color: #FFF;
    font-size: 10;
    font-weight: bold;
    margin-end: 12;
    letter-spacing: 2.4;
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