// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View, Text } from 'react-native';


const StyledView = styled(View)`
    flex: 1;
    display: flex;
    alignItems: center;
    justifyContent: center;
    backgroundColor: #16a085
`

const StyledText = styled(Text)`
    color: #FFF;
    marginEnd: 12px;
    fontSize: 18px;
    letterSpacing: 2.5;
    textTransform: uppercase;
`

const Settings = props => 
    <StyledView>
        <StyledText>Settings</StyledText>
    </StyledView>

export default memo(Settings);