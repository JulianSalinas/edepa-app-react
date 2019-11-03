// Core 
import React from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View, Text, ActivityIndicator } from 'react-native';
import { withContext } from '../../app/AppContext';

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

const Indicator = props =>
    <StyledLayout>
        <StyledActivity size='large' color={props.darkMode ? '#FFF' : '#000'} />
        <IndicatorText {...props} />
    </StyledLayout>

Indicator.propTypes = {
    text: PropTypes.string
}

Indicator.defaultProps = {
    text: 'ESPERE'
}

export default withContext(Indicator); 