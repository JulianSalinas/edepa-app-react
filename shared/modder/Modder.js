// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Local 
import Switcher from './Switcher';
import Background from './Background';
import Theme from '../../app/Theme';

const ModderSwitch = props => props.debug ?
    <Switcher {...props} /> : null;

const Modder = props =>
    <Background {...props}>
        {props.children}
        <ModderSwitch {...props} />
    </Background>

Modder.propsTypes = {
    debug: PropTypes.bool,
    style: PropTypes.object,
    darkMode: PropTypes.bool,
    darkBackground: PropTypes.arrayOf(PropTypes.string),
    changeDarkMode: PropTypes.func.isRequired
}

Modder.defaultProps = {
    style: {},
    debug: true,
    darkMode: true,
    darkBackground: Theme.darkBackground
}

export default memo(Modder); 