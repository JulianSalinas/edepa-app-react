// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View, Text } from 'react-native';


const StyledView = styled(View)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1c40f;
`

const StyledText = styled(Text)`
    color: #FFF;
    margin-right: 12px;
    font-size: 18px;
    letter-spacing: 2.5;
    text-transform: uppercase;
`

const News = props =>
    <StyledView>
        <StyledText>News</StyledText>
    </StyledView>

export default memo(News);