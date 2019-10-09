import React from 'react';
import PropTypes from 'prop-types';

import { Screen } from '../../app/Types';
import DarkModder from '../../shared/modder/DarkModder';

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

const LoadingLayout = props =>
    <StyledLayout>
        <Indicator size='large' color={props.darkMode ? '#FFF' : '#000'} />
        <StyledText style={{ color: props.darkMode ? '#FFF' : '#000' }}>
            CARGANDO
        </StyledText>
    </StyledLayout>

const LoadingModded = props =>
    <DarkModder {...props} style={{ flex: 1 }}>
        <LoadingLayout {...props} />
    </DarkModder>

const Loading = props => props.screenProps ?
    <LoadingModded
        darkMode={props.screenProps.kFeel.isDarkMode()}
        changeDarkMode={props.screenProps.kFeel.changeDarkMode} /> :
    <LoadingModded
        darkMode={props.darkMode}
        changeDarkMode={() => console.log('Not implemented here.')} />

Loading.propTypes = {
    darkMode: PropTypes.bool,
    navigation: PropTypes.object,
    screenProps: Screen,
}

Loading.defaultProps = {
    darkMode: true,
    screenProps: null
}

export default Loading; 