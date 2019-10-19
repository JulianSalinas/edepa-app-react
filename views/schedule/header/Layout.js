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

const CenterText = styled(Animated.Text)`
    color: #FFF;
    font-size: 70;
    font-weight: 700;
    letter-spacing: 2.4;
`

const FontOpacity = ({ height }) => height.interpolate({
    inputRange: [200 - 45 * 2, 200 - 45],
    outputRange: [0.01, 1],
    extrapolate: 'clamp'
})

const FontScale = ({ height }) => height.interpolate({
    inputRange: [200 - 45, 200],
    outputRange: [0.7, 1],
    extrapolate: 'clamp'
})

const Center = ({ datetime, next, prev, ...props }) =>
    <StyledCenter style={{ opacity: FontOpacity(props) }}>
        <Switcher onPress={prev} direction={'left'} />
        <CenterText style={{ transform: [{ scale: FontScale(props) }] }}>
            {getDay(datetime)}
        </CenterText>
        <Switcher onPress={next} direction={'right'} />
    </StyledCenter>

const StyledBottom = styled(View)`
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
        darkBackground={props.foreground}>
        <Bottom {...props} />
        <Center {...props} />
        <Upper {...props} />
    </Background>

Layout.propTypes = {
    next: PropTypes.func,
    prev: PropTypes.func,
    style: PropTypes.object,
    datetime: PropTypes.number,
    height: PropTypes.object.isRequired,
    onHeightLayout: PropTypes.func.isRequired,
    foreground: PropTypes.arrayOf(PropTypes.string),
}

Layout.defaultProps = {
    style: {},
    datetime: 1570939200000,
    next: () => console.log('Next pressed'),
    prev: () => console.log('Prev pressed'),
    foreground: Theme.foreground,
}

export default memo(Layout);
