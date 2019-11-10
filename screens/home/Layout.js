// Core 
import PropTypes from 'prop-types';
import React, { memo } from 'react';

// Libs
import styled from 'styled-components/native';
import { View, ScrollView } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// Local 
import Toolbar from '../../shared/Toolbar';
import Welcome from './widgets/Welcome';
import StartDate from './widgets/StartDate';
import Shortcuts from './widgets/Shortcuts';
import { withContext } from '../../app/AppContext';
import { HomeTypes } from '../../app/AppTypes';


const StyledScrollableHome = styled(ScrollView)`
    flex: 1;
    display: flex;
`

const ScrollableHome = props =>
    <StyledScrollableHome contentContainerStyle={{ paddingVertical: 16 }}>
        <Welcome />
        <StartDate date={props.home ? props.home.start : null} />
        <Shortcuts />
    </StyledScrollableHome>

const Home = props =>
    <View style={{ flex: 1, paddingTop: getStatusBarHeight() }}>
        <Toolbar text={props.toolbarText} darkMode={props.darkMode} />
        <ScrollableHome {...props} />
    </View>

Home.propTypes = {
    home: HomeTypes,
    toolbarText: PropTypes.string
}

Home.defaultProps = {
    toolbarText: 'Inicio'
}

export default withContext(memo(Home));