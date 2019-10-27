// Core
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { useTheme } from 'react-navigation';
import { View, Animated } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

// Local 
import Filter from './Filter';
import Switcher from './Switch';
import Background from '../../../shared/modder/Background';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { getWeekDay, getMonth, getYear, getDay } from '../../../scripts/Time';
import Gradient from '../../../colors/Gradient';


const TextStyle = props => ({
    opacity: props.opacityAnimation,
    transform: Movement(props)
})

const FontScale = ({ height }) => height.interpolate({
    inputRange: [200 - 45, 200],
    outputRange: [0.7, 1],
    extrapolate: 'clamp'
})

const Movement = props => ([
    { translateX: props.moveAnimation.x },
    { translateY: props.moveAnimation.y }
])

const StyledUpperText = styled(Animated.Text)`
    color: #FFF;
    font-size: 10;
    letter-spacing: 2.4;
    margin-top: 16;
    text-transform: uppercase;
`

const UpperText = props =>
    <StyledUpperText style={TextStyle(props)}>
        {getWeekDay(props.datetime)}
    </StyledUpperText>

const StyledUpper = styled(View)`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const UpperView = props =>
    <StyledUpper>
        <UpperText {...props} />
    </StyledUpper>

const CenterOpacity = ({ height }) => height.interpolate({
    inputRange: [200 - 45 * 2, 200 - 45],
    outputRange: [0.01, 1],
    extrapolate: 'clamp'
})

const CenterTextStyle = props => ({
    opacity: props.opacityAnimation,
    transform: [...Movement(props), { scale: FontScale(props) }]
})

const StyledCenterFilter = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const CenterFilter = props =>
    <StyledCenterFilter>
        <Filter
            options={['Todos', 'Favoritos']}
            onActiveChanged={index => console.log(`Index changed to ${index}`)} />
    </StyledCenterFilter>

const StyledCenterText = styled(Animated.Text)`
    color: #FFF;
    font-size: 70;
    font-weight: 700;
    letter-spacing: 2.4;
`

const CenterText = props =>
    <StyledCenterText style={CenterTextStyle(props)}>
        {getDay(props.datetime)}
    </StyledCenterText>

const StyledCenterTitle = styled(Animated.View)`
    display: flex;
    align-items: center;
`

const CenterTitle = props =>
    <StyledCenterTitle>
        <CenterText {...props} />
        <CenterFilter {...props} />
    </StyledCenterTitle>

const StyledCenterView = styled(Animated.View)`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 16px;
`

const CenterView = props =>
    <StyledCenterView style={{ opacity: CenterOpacity(props) }}>
        <Switcher onPress={props.prev} direction={'left'} />
        <CenterTitle {...props} />
        <Switcher onPress={props.next} direction={'right'} />
    </StyledCenterView>

const StyledBottomText = styled(Animated.Text)`
    color: #FFF;
    font-size: 10;
    letter-spacing: 2.4;
    text-transform: uppercase;
`

const BottomText = ({ datetime, ...props }) =>
    <StyledBottomText style={TextStyle(props)}>
        {`${getDay(datetime)}° ${getMonth(datetime)}, ${getYear(datetime)}`}
    </StyledBottomText>

const StyledBottom = styled(TouchableWithoutFeedback)`
    padding: 16px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
`

const BottomView = props =>
    <StyledBottom onPress={props.next}>
        <BottomText {...props} />
    </StyledBottom>

const Recognizer = props =>
    <GestureRecognizer
        style={props.style}
        onSwipeLeft={props.next}
        onSwipeRight={props.prev}>
        <BottomView {...props} />
        <CenterView {...props} />
        <UpperView {...props} />
    </GestureRecognizer>

const Layout = props =>
    <Background
        darkMode
        style={props.style}
        onLayout={props.onHeightLayout}
        darkBackground={props.foreground}>
        <Recognizer {...props} />
    </Background>

const Header = props => {
    const darkMode = useTheme() === 'dark';
    const foreground = darkMode ? Gradient.KASHMIR : Gradient.CRIMSON_TIDE;
    return <Layout {...props} foreground={foreground} />
}

Header.propTypes = {
    next: PropTypes.func,
    prev: PropTypes.func,
    style: PropTypes.object,
    datetime: PropTypes.number,
    height: PropTypes.object.isRequired,
    onHeightLayout: PropTypes.func.isRequired,
    moveAnimation: PropTypes.any.isRequired,
    opacityAnimation: PropTypes.any.isRequired,
}

Header.defaultProps = {
    style: {},
    datetime: 1570939200000,
    next: () => console.log('Next pressed'),
    prev: () => console.log('Prev pressed')
}

export default memo(Header);
