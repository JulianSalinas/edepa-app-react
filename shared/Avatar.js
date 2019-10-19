// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

// Local 
import flat from '../colors/Flat';
import { initials } from '../scripts/Utils';
import { colorFor } from '../scripts/Color';


const AvatarText = ({ title, size, color }) =>
    <Text style={{ color, fontSize: size / 2.5 }}>
        {initials(title)}
    </Text>


const StyledView = styled(View)`
    align-items: center;
    justify-content: center;
    border-width: 1;
    border-color: transparent;
`

const Avatar = ({ title, size, shape, ...props }) =>
    <StyledView style={[props.style, {
        width: size,
        height: size,
        borderRadius: size * (shape === 'circle' ? 0.5 : 0.0),
        backgroundColor: colorFor(title, props.colors)
    }]}>
        <AvatarText title={title} size={size} color={'#FFF'} />
    </StyledView>

Avatar.propTypes = {
    size: PropTypes.number,
    style: PropTypes.object,
    colors: PropTypes.array,
    title: PropTypes.string.isRequired,
    shape: PropTypes.oneOf(['square', 'circle'])
}

Avatar.defaultProps = {
    size: 90,
    style: {},
    colors: flat,
    title: 'Julian Salinas Rojas',
    shape: 'circle'
}

export default memo(Avatar);