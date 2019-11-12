// Core 
import React from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { Text, SafeAreaView } from 'react-native';

// Local
import { withMode } from '../../theme/ThemeMode';


const StyledView = styled(SafeAreaView)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Settings = props =>
    <StyledView>
        <Text>
            Configuración
        </Text>
    </StyledView>

export default withMode(Settings, true);