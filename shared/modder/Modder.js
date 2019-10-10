import React from 'react';
import PropTypes from 'prop-types';

import Switcher from './Switcher';
import Background from './Background';


const DarkLayout = ({ darkMode, changeDarkMode, ...props }) =>
    <Background darkMode={darkMode} style={props.style} {...props}>
        {props.children}
        <Switcher darkMode={darkMode} changeDarkMode={changeDarkMode} />
    </Background>

const Modder = props =>
    <DarkLayout
        {...props}
        darkMode={props.darkMode}
        darkPrimary={props.darkPrimary}
        darkSecondary={props.darkSecondary}
        changeDarkMode={props.changeDarkMode}
    />

Modder.propsTypes = {
    changeDarkMode: PropTypes.func,
    darkMode: PropTypes.bool,
    darkPrimary: PropTypes.string,
    darkSecondary: PropTypes.string,
    style: PropTypes.object
}

Modder.defaultProps = {
    changeDarkMode: () => console.log('You should pass changeDarkMode(value)'),
    darkMode: true,
    darkPrimary: '#141E30',
    darkSecondary: '#243B55',
    style: {}
}

export default Modder; 