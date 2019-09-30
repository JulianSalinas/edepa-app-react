import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';
import { View, Text } from 'react-native';


const StyledView = styled(View)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #8e44ad
`

const StyledText = styled(Text)`
    color: #FFF;
    margin-end: 12px;
    font-size: 18px;
    letter-spacing: 2.5;
    text-transform: uppercase;
`

const NewsScreen = props => 
    <StyledView>
        <StyledText>News</StyledText>
    </StyledView>

export default NewsScreen;