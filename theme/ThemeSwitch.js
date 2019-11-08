// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Text, View, Switch } from 'react-native';

// Local
import DefaultPalette from './LightPalette';


const StyledText = styled(Text)`
    font-size: 10;
    letter-spacing: 2.4;
    margin-right: 12;
    text-transform: uppercase;
`

const DarkText = props =>
    <StyledText style={{ color: props.palette.primaryFont }}>
        MODO OSCURO
    </StyledText>

const StyledSwitch = styled(View)`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 8px 16px;
`

const ModeSwitch = props =>
    <StyledSwitch style={ ModeSwitchBackground(props) }>
        <DarkText {...props} />
        <Switch value={props.darkMode} onValueChange={props.changeDarkMode} />
    </StyledSwitch>

const ModeSwitchBackground = ({ palette }) => ({
    backgroundColor: typeof (palette.background) === 'string' ?
        palette.background :
        palette.background[0]
})

ModeSwitch.propsTypes = {
    darkMode: PropTypes.bool,
    palette: PropTypes.object,
    changeDarkMode: PropTypes.func.isRequired
}

ModeSwitch.defaultProps = {
    darkMode: true,
    palette: DefaultPalette
}

export default memo(ModeSwitch);