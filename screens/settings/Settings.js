// Core 
import React from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View } from 'react-native';
import { withMode } from '../../theme/Mode';

// Local
import Login from '../auth/login/Layout';

const StyledView = styled(View)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Settings = props =>
    <StyledView>
        <Login darkMode={props.darkMode} />
    </StyledView>

export default withMode(Settings, true);