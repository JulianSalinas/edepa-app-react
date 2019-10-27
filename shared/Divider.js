// Core
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { useTheme } from 'react-navigation';
import { View } from 'react-native';


const DividerColor = props => ({
    backgroundColor: props.darkMode ? '#FFF' : '#EEE'
})

const StyledView = styled(View)`
    height: 1.5px;
    width: 100%;
`

const DividerLayout = props =>
    <StyledView style={[props.style, DividerColor(props)]} />

const Divider = props => {
    const darkMode = useTheme() === 'dark';
    return <DividerLayout {...props} darkMode={darkMode} />
}

Divider.propTypes = {
    style: PropTypes.object
}

Divider.defaultProps = {
    style: {}
}

export default memo(Divider);