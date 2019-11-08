// Core 
import React from 'react';

// Local 
import Background from './Background';
import ThemeSwitch from './ThemeSwitch';
import { withContext } from '../app/AppContext';

const ModeSwitch = props =>
    <ThemeSwitch
        palette={props.palette}
        darkMode={props.darkMode}
        changeDarkMode={props.changeDarkMode}
    />

const Mode = props =>
    <Background darkMode={props.darkMode} darkBackground={props.palette.background} style={{ flex: 1 }}>
        {props.component}
        {
            props.debug ? <ModeSwitch {...props} /> : null
        }
    </Background>

export function withMode(Component, debug = false) {

    return withContext(props =>
        <Mode
            debug={debug}
            palette={props.palette}
            darkMode={props.darkMode}
            changeDarkMode={props.actions.changeDarkMode}
            component={<Component {...props} />}
        />
    )

}