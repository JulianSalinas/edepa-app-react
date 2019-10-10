// Core
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View } from 'react-native';


const StyledView = styled(View)`
    height: 1.5px;
    width: 100%;
`

const Divider = props => 
    <StyledView style={[props.style, { 
        backgroundColor: props.darkMode ? '#FFF' : '#EEE'}]}
    />

Divider.propTypes = {
    style: PropTypes.object,
    darkMode: PropTypes.bool.isRequired
}

Divider.defaultProps = {
    style: {},
    darkMode: false
}

export default memo(Divider);