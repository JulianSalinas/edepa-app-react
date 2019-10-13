// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg'

const StyledView = styled(View)`
    alignItems: center;
    display: flex;
    flexDirection: column;
    justifyContent: center;
    width: 48;
`

const DecorationPoint = ({ color, opacity }) =>
    <G>
        <Circle fill='none' stroke={color} opacity={opacity} strokeWidth={2.5} cx={10} cy={10} r={8.5} />
        <Circle fill={color} stroke={color} opacity={opacity} cx={10} cy={10} r={2} />
    </G>

const DecorationPicture = props =>
    <Svg width={20} height={20} style={props.style}>
        <DecorationPoint {...props} />
    </Svg>

const DecorationLayout = props =>
    <StyledView>
        <View style={{ backgroundColor: props.stroke, opacity: 0.1, width: 2.5, flex: 1 }} />
        <DecorationPicture {...props} />
        <View style={{ backgroundColor: props.stroke, opacity: 0.1, width: 2.5, flex: 1 }} />
    </StyledView>

const Decoration = props => {
    const stroke = props.darkMode ? '#FFF' : '#000';
    const color = props.active ? props.color : stroke;
    const opacity = props.active ? 1 : 0.4;
    return <DecorationLayout stroke={stroke} color={color} opacity={opacity} style={props.style}/>
}

Decoration.propTypes = {
    active: PropTypes.bool,
    darkMode: PropTypes.bool,
    color: PropTypes.string,
    style: PropTypes.object
}

Decoration.defaultProps = {
    active: false,
    darkMode: true,
    color: '#f12',
    style: {}
}

export default memo(Decoration);