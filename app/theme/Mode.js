// Core 
import React, { memo } from 'react';

// Local 
import Switch from './Switch';
import Background from './Background';


const ModeSwitch = props =>
    <Switch
        darkMode={props.darkMode}
        changeDarkMode={props.changeDarkMode}
    />

const Mode = props =>
    <Background darkMode={props.darkMode} style={{ flex: 1 }}>
        {props.component}
        <ModeSwitch {...props} />
    </Background>

export function withMode(Component) {

    return memo(props => {

        const { darkMode, changeDarkMode } = props.screenProps.mode;

        return <Mode
            darkMode={darkMode}
            changeDarkMode={changeDarkMode}
            component={<Component darkMode={darkMode} />}
        />

    })

}