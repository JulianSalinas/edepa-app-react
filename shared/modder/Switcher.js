// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View, Text, Switch } from 'react-native';

// Local
import Theme from '../../app/Theme';


const StyledSwitch = styled(View)`
    padding: 8px 16px;
    display: flex;
    flexDirection: row;
    alignItems: center;
    justifyContent: flex-start;
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
    <StyledSwitch style={{ backgroundColor: props.darkBackground[0] }}>
        <DarkText darkMode={props.darkMode} />
        <Switch value={props.darkMode} onValueChange={props.changeDarkMode} />
    </StyledSwitch>

Switcher.propsTypes = {
    darkMode: PropTypes.bool,
    changeDarkMode: PropTypes.func.isRequired,
    darkBackground: PropTypes.arrayOf(PropTypes.string)
}

Switcher.defaultProps = {
    darkMode: true,
    darkBackground: Theme.darkBackground
}

export default memo(Switcher);