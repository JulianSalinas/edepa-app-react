// Core 
import React from 'react';

// Local 
import Switch from './Switch';
import Background from './Background';
import { withContext } from '../app/AppContext';

const ModeSwitch = props =>
    <Switch
        darkMode={props.darkMode}
        changeDarkMode={props.changeDarkMode}
    />

const Mode = props =>
    <Background darkMode={props.darkMode} style={{ flex: 1 }}>
        {props.component}
        {
            props.debug ? <ModeSwitch {...props} /> : null
        }
    </Background>

export function withMode(Component, debug = false) {

    return withContext(props =>
        <Mode
            debug={debug}
            darkMode={props.theme.darkMode}
            changeDarkMode={props.theme.changeDarkMode}
            component={<Component {...props} />}
        />
    )

}