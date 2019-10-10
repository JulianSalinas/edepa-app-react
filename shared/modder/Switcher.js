import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';
import { View, Text, Switch } from 'react-native';


const StyledSwitch = styled(View)`
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
    margin-end: 12;
    letter-spacing: 2.4;
    text-transform: uppercase;
`

const DarkText = props => 
    <StyledText>
        MODO OSCURO
    </StyledText>

const Switcher = props => 
    <StyledSwitch>
        <DarkText darkMode={props.darkMode}/>
        <Switch value={props.darkMode} onValueChange={props.changeDarkMode}/>
    </StyledSwitch>

Switcher.propsTypes = {
    darkMode: PropTypes.bool.isRequired,
    changeDarkMode: PropTypes.func.isRequired
}

Switcher.defaultProps = {
    darkMode: true,
    changeDarkMode: () => console.log('You should pass changeDarkMode(value)')
}

export default Switcher;