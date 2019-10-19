// Core
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Text, View, Animated } from 'react-native';

// Local 
import Switcher from './Switcher';
import Theme from '../../../app/Theme';
import Background from '../../../shared/modder/Background';
import { getWeekDay, getMonth, getYear, getDay } from '../../../scripts/Time';


const StyledTop = styled(View)`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const TopText = styled(Text)`
    color: #FFF;
    font-size: 10;
    letter-spacing: 2.4;
    margin-top: 16;
    text-transform: uppercase;
`

const Upper = ({ datetime }) =>
    <StyledTop>
        <TopText>{getWeekDay(datetime)}</TopText>
    </StyledTop>

const StyledCenter = styled(Animated.View)`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const CenterText = styled(Text)`
    color: #FFF;
    font-size: 70;
    font-weight: 300;
    letter-spacing: 2.4;
`

const Center = ({ datetime, next, prev, centerStyle }) =>
    <StyledCenter style={centerStyle}>
        <Switcher onPress={prev} direction={'left'} />
        <CenterText>{getDay(datetime)}</CenterText>
        <Switcher onPress={next} direction={'right'} />
    </StyledCenter>


const StyledBottom = styled(View)`
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 16px;
`

const BottomText = styled(Text)`
    color: #FFF;
    font-size: 10;
    letter-spacing: 2.4;
    text-transform: uppercase;
`

const Bottom = ({ datetime }) =>
    <StyledBottom>
        <BottomText>{`${getMonth(datetime)} ${getYear(datetime)}`}</BottomText>
    </StyledBottom>

const Layout = props =>
    <Background
        darkMode
        style={props.style}
        onLayout={props.onHeightLayout}
        darkBackground={props.darkForeground}>
        <Bottom {...props} />
        <Center {...props} />
        <Upper {...props} />
    </Background>

Layout.propTypes = {
    darkForeground: PropTypes.arrayOf(PropTypes.string),
    datetime: PropTypes.number,
    next: PropTypes.func,
    prev: PropTypes.func,
    style: PropTypes.object,
    onHeightLayout: PropTypes.func,
    centerStyle: PropTypes.object
}

Layout.defaultProps = {
    darkForeground: Theme.darkForeground,
    datetime: 1570939200000,
    next: () => console.log('Next pressed'),
    prev: () => console.log('Prev pressed'),
    style: {},
    onHeightLayout: () => console.warn('OnHeightLaout must be implemented'),
    centerStyle: {}
}

export default memo(Layout);
