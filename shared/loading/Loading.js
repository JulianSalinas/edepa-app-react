import React from 'react';
import PropTypes from 'prop-types';
import Background from '../background/Background';

import styled from 'styled-components/native';
import { View, Text, ActivityIndicator } from 'react-native';

import DarkModder from '../modder/Modder';
import { Container } from 'native-base';


const Indicator = styled(ActivityIndicator)`
    margin: 12px
`

const StyledView = styled(View)`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledFont = styled(Text)`
    font-size: 10;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
`

const LoadingContent = ({ darkMode }) =>
    <StyledView>
        <Indicator size='large' color={darkMode ? '#FFF' : '#000'} />
        <StyledFont style={{ color: darkMode ? '#FFF' : '#000' }}>
            Loading
        </StyledFont>
    </StyledView>

const LoadingView = ({ darkMode, changeDarkMode, ...props }) =>
    <Background darkMode={darkMode} {...props}>
        <LoadingContent darkMode={darkMode} />
        <DarkModder darkMode={darkMode} changeDarkMode={changeDarkMode} />
    </Background>

const LoadingLayout = props =>
    <LoadingView
        darkMode={props.kFeel.isDarkMode()}
        darkPrimary={props.kFeel.darkPrimary}
        darkSecondary={props.kFeel.darkSecondary}
        changeDarkMode={props.kFeel.changeDarkMode}
    />

const Loading = props =>
    <Container>
        <LoadingLayout {...props.screenProps} />
    </Container>

Loading.propsTypes = {
    darkMode: PropTypes.bool.isRequired,
    darkPrimary: PropTypes.string.isRequired,
    darkSecondary: PropTypes.string.isRequired
}

Loading.defaultProps = {
    darkMode: true,
    darkPrimary: '#e96443',
    darkSecondary: '#904e95'
}

export default Loading; 