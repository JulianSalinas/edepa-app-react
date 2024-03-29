// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';


const Logo = props =>

    <Svg
        xmlns='http://www.w3.org/2000/svg'
        width='90'
        height='92'
        viewBox='0 0 165 165'
    >
        <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="100" y2="100">
                <Stop offset="0" stopColor={props.first} stopOpacity="1" />
                <Stop offset="1" stopColor={props.second} stopOpacity="1" />
            </LinearGradient>
        </Defs>
        <Path
            fill={props.darkMode ? '#FFF' : '#676567'}
            d='M7.9 135.38c.13 7.71 5 10.88 10.75 10.88a20.57 20.57 0 008.68-1.62l1 4.08a25.36 25.36 0 01-10.43 1.94c-9.65 0-15.41-6.34-15.41-15.8S8 118 17.16 118c10.23 0 13 9 13 14.77a22.84 22.84 0 01-.19 2.66zm16.71-4.08c.06-3.63-1.49-9.27-7.9-9.27-5.77 0-8.29 5.32-8.75 9.27zM64.25 104v37.89c0 2.79.06 6 .26 8.1h-5.12l-.26-5.44H59a11.61 11.61 0 01-10.69 6.15c-7.57 0-13.4-6.41-13.4-15.94C34.84 124.37 41.32 118 49 118c4.8 0 8 2.27 9.46 4.8h.13V104zm-5.7 27.4a10.26 10.26 0 00-.26-2.4 8.38 8.38 0 00-8.23-6.61c-5.89 0-9.39 5.18-9.39 12.12 0 6.34 3.11 11.59 9.26 11.59a8.57 8.57 0 008.36-6.8 10.15 10.15 0 00.26-2.46zM76.88 135.38c.13 7.71 5.05 10.88 10.75 10.88a20.57 20.57 0 008.68-1.62l1 4.08a25.36 25.36 0 01-10.43 1.94c-9.65 0-15.41-6.34-15.41-15.8S77 118 86.14 118c10.24 0 13 9 13 14.77a20.42 20.42 0 01-.2 2.66zm16.71-4.08c.06-3.63-1.49-9.27-7.9-9.27-5.77 0-8.29 5.32-8.75 9.27zM106.15 128.9c0-4-.13-7.25-.25-10.23h5.1l.26 5.37h.13a12.33 12.33 0 0111.15-6.04c7.58 0 13.28 6.42 13.28 15.94 0 11.27-6.87 16.84-14.25 16.84-4.14 0-7.77-1.81-9.65-4.92h-.13v17h-5.64zm5.64 8.36a12.77 12.77 0 00.26 2.33 8.8 8.8 0 008.55 6.67c6 0 9.52-4.92 9.52-12.11 0-6.29-3.3-11.66-9.33-11.66a9.09 9.09 0 00-8.61 7.06 9 9 0 00-.39 2.33zM160.37 150l-.45-4h-.2a11.69 11.69 0 01-9.59 4.66c-6.34 0-9.58-4.47-9.58-9 0-7.58 6.73-11.73 18.85-11.66v-.65c0-2.59-.72-7.26-7.13-7.26a15.58 15.58 0 00-8.16 2.34l-1.3-3.76a19.44 19.44 0 0110.3-2.79c9.59 0 11.92 6.55 11.92 12.83v11.79a44.09 44.09 0 00.52 7.52zm-.84-16c-6.22-.13-13.28 1-13.28 7.06a5 5 0 005.37 5.44 7.79 7.79 0 007.58-5.25 5.77 5.77 0 00.33-1.81z'
        />
        <Path
            fill={props.darkMode ? 'url(#grad)' : '#e96058'}
            d='M33.92 47.49h27.62v47.59H33.92V47.49z'
        />
        <Path
            fill={props.darkMode ? 'url(#grad)' : '#e31837'}
            d='M67.84 0h27.64v95.08H67.84V0z'
        />
        <Path
            fill={props.darkMode ? 'url(#grad)' : '#e9625a'}
            d='M102.87 92.87h25.42v-68h-25.42zm27.62 2.21h-29.83v-72.4h29.83zM135.7 58.45h27.61v36.63H135.7V58.45z'
        />
        <Path
            fill={props.darkMode ? 'url(#grad)' : '#ea6b60'}
            d='M27.61 68.66H0v26.42h27.61zm-2.2 24.22H2.2v-22h23.21z'
        />
    </Svg>

const Edepa = props => {
    const isString = typeof (props.color) === 'string';
    const first = isString ? props.color : props.color[0];
    const second = isString ? props.color : props.color[1];
    return <Logo {...props} first={first} second={second} />
}

Edepa.propTypes = {
    darkMode: PropTypes.bool
}

Edepa.defaultProps = {
    darkMode: false
}

export default memo(Edepa);