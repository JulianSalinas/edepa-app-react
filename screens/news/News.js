// Core 
import React from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { withMode } from '../../theme/ThemeMode';


const StyledView = styled(View)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledText = styled(Text)`
    margin-right: 12px;
    font-size: 18px;
    letter-spacing: 2.5;
    text-transform: uppercase;
`

const News = props =>
    <StyledView>
        <StyledText style={{ color: props.darkMode ? '#FFF' : '#000' }}>News</StyledText>
    </StyledView>

export default withMode(News);