// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { useTheme } from 'react-navigation';
import { View, Text, ActivityIndicator } from 'react-native';


const StyledActivity = styled(ActivityIndicator)`
    margin: 12px;
`

const StyledText = styled(Text)`
    display: flex;
    font-size: 10;
    letter-spacing: 2.4px;
    justify-content: center;
    text-transform: uppercase;
`

const IndicatorText = props =>
    <StyledText style={{ color: props.darkMode ? '#FFF' : '#000' }}>
        {props.text}
    </StyledText>

const StyledLayout = styled(View)`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`

const IndicatorLayout = props =>
    <StyledLayout>
        <StyledActivity size='large' color={props.darkMode ? '#FFF' : '#000'} />
        <IndicatorText {...props} />
    </StyledLayout>

const Indicator = props => {
    let darkMode = useTheme() === 'dark';
    return <IndicatorLayout {...props} darkMode={darkMode} />
}

Indicator.propTypes = {
    text: PropTypes.string
}

Indicator.defaultProps = {
    text: 'ESPERE'
}

export default memo(Indicator); 