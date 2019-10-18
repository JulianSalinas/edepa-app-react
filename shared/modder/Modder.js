// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Local 
import Switcher from './Switcher';
import Background from './Background';
import Theme from '../../app/Theme';


const Modder = props =>
    <Background {...props}>
        {props.children}
        <Switcher {...props} />
    </Background>

Modder.propsTypes = {
    style: PropTypes.object,
    darkMode: PropTypes.bool,
    darkBackground: PropTypes.arrayOf(PropTypes.string),
    changeDarkMode: PropTypes.func.isRequired
}

Modder.defaultProps = {
    style: {},
    darkMode: true,
    darkBackground: Theme.darkBackground
}

export default memo(Modder); 