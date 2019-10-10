// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View, Text, ActivityIndicator } from 'react-native';


const Indicator = styled(ActivityIndicator)`
    margin: 12px
`

const StyledLayout = styled(View)`
    flex: 3;
    display: flex;
    alignItems: center;
    justifyContent: center;
`

const StyledText = styled(Text)`
    fontSize: 10;
    letterSpacing: 2.4px;
    textTransform: uppercase;
    display: flex;
    justifyContent: center;
`

const LoadingText = props =>
    <StyledText style={{ color: props.darkMode ? '#FFF' : '#000' }}>
        {props.text}
    </StyledText>

const Loading = props =>
    <StyledLayout>
        <Indicator size='large' color={props.darkMode ? '#FFF' : '#000'} />
        <LoadingText {...props} />
    </StyledLayout>

Loading.propTypes = {
    darkMode: PropTypes.bool,
    text: PropTypes.string
}

Loading.defaultProps = {
    darkMode: true,
    text: 'ESPERE'
}

export default memo(Loading); 