// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

// Local 
import flat from '../../constants/Flat';
import { initials } from '../../scripts/Utils';
import { colorFor } from '../../scripts/Color';


const StyledView = styled(View)`
    alignItems: center;
    justifyContent: center;
    borderWidth: 1;
    borderColor: transparent;
`

const AvatarText = ({ title, size, color }) =>
    <Text style={{ color, fontSize: size / 2.5 }}>
        {initials(title)}
    </Text>

const Avatar = ({ title, size, shape, ...props }) =>
    <StyledView style={[props.style, {
        width: size,
        height: size,
        borderRadius: size * (shape === 'circle' ? 0.5 : 0.0),
        backgroundColor: colorFor(title, props.colors)
    }]}>
        <AvatarText title={title} size={size} color={'#FFF'}/>
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