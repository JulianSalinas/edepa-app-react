import React from 'react';
import PropTypes from 'prop-types';

import DarkSwitch from './DarkSwitch';
import Background from './Background';


const DarkLayout = ({ darkMode, changeDarkMode, ...props }) =>
    <Background darkMode={darkMode} style={props.style} {...props}>
        {props.children}
        <DarkSwitch darkMode={darkMode} changeDarkMode={changeDarkMode} />
    </Background>

const DarkModder = props =>
    <DarkLayout
        {...props}
        darkMode={props.darkMode}
        darkPrimary={props.darkPrimary}
        darkSecondary={props.darkSecondary}
        changeDarkMode={props.changeDarkMode}
    />

DarkModder.propsTypes = {
    changeDarkMode: PropTypes.func,
    darkMode: PropTypes.bool,
    darkPrimary: PropTypes.string,
    darkSecondary: PropTypes.string,
    style: PropTypes.object
}

DarkModder.defaultProps = {
    changeDarkMode: () => console.log('You should pass changeDarkMode(value)'),
    darkMode: true,
    darkPrimary: '#141E30',
    darkSecondary: '#243B55',
    style: {}
}

export default DarkModder; 