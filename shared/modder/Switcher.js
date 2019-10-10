// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View, Text, Switch } from 'react-native';


const StyledSwitch = styled(View)`
    padding: 8px 16px;
    display: flex;
    flexDirection: row;
    alignItems: center;
    justifyContent: flex-start;
    backgroundColor: #2c3e50
`

const StyledText = styled(Text)`
    color: #FFF;
    fontSize: 10;
    marginEnd: 12;
    letterSpacing: 2.4;
    textTransform: uppercase;
`

const DarkText = () => 
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

export default memo(Switcher);