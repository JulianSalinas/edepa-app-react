import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';
import { View, Text } from 'react-native';


const StyledView = styled(View)`
    flex: 1;
    display: flex;
    alignItems: center;
    justifyContent: center;
    backgroundColor: #27ae60
`

const StyledText = styled(Text)`
    color: #FFF;
    marginEnd: 12px;
    fontSize: 18px;
    letterSpacing: 2.5;
    textTransform: uppercase;
`

const News = props => 
    <StyledView>
        <StyledText>News</StyledText>
    </StyledView>

export default News;