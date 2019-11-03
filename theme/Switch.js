// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Text, View, Switch } from 'react-native';

// Local
import Theme from './Theme';


const StyledText = styled(Text)`
    font-size: 10;
    letter-spacing: 2.4;
    margin-right: 12;
    text-transform: uppercase;
`

const DarkText = props =>
    <StyledText style={{ color: props.darkMode ? '#FFF' : '#000' }}>
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
    <StyledSwitch style={{
        backgroundColor: props.darkMode ?
            typeof (props.darkBackground) === 'string' ?
                props.darkBackground :
                props.darkBackground[0] : '#FFF'
    }}>
        <DarkText darkMode={props.darkMode} />
        <Switch value={props.darkMode} onValueChange={props.changeDarkMode} />
    </StyledSwitch>

ModeSwitch.propsTypes = {
    darkMode: PropTypes.bool,
    changeDarkMode: PropTypes.func.isRequired,
    darkBackground: PropTypes.arrayOf(PropTypes.string)
}

ModeSwitch.defaultProps = {
    darkMode: true,
    darkBackground: Theme.darkBackground
}

export default memo(ModeSwitch);