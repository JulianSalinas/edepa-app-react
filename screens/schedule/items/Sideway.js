// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg'


const StyledView = styled(View)`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 48;
`

const SidewayPoint = ({ color, opacity }) =>
    <G>
        <Circle fill='none' stroke={color} opacity={opacity} strokeWidth={2.5} cx={10} cy={10} r={8.5} />
        <Circle fill={color} stroke={color} opacity={opacity} cx={10} cy={10} r={2} />
    </G>

const SidewayPicture = props =>
    <Svg width={20} height={20} style={props.style}>
        <SidewayPoint {...props} />
    </Svg>

const SidewayLayout = props =>
    <StyledView>
        <View style={{ backgroundColor: props.stroke, opacity: (props.isLinked ? 0.1 : 0), width: 1.5, height: 17 }} />
        <SidewayPicture {...props} />
        <View style={{ backgroundColor: props.stroke, opacity: 0.1, width: 1.5, flex: 1 }} />
    </StyledView>

const Sideway = props => {
    const stroke = props.darkMode ? '#FFF' : '#000';
    const color = props.active ? props.color : stroke;
    const opacity = props.active ? 1 : 0.6;

    return <SidewayLayout
        stroke={stroke}
        color={color}
        opacity={opacity}
        style={props.style}
        isLinked={props.isLinked}
    />

}

Sideway.propTypes = {
    active: PropTypes.bool,
    darkMode: PropTypes.bool,
    color: PropTypes.string,
    style: PropTypes.object,
    isLinked: PropTypes.bool
}

Sideway.defaultProps = {
    active: false,
    darkMode: true,
    color: '#f12',
    style: {},
    isLinked: false
}

export default memo(Sideway);