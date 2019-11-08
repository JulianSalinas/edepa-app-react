// Core
import React, { memo, PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { View, Animated, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// Local 
import Filter from './Filter';
import Switcher from './Switch';
import Theme from '../../../theme/LightPalette';
import Background from '../../../theme/Background';
import { getWeekDay, getMonth, getYear, getDay } from '../../../scripts/Time';
import { opacityFor } from '../../../scripts/Color';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Platform } from '@unimodules/core';


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
    text-transform: uppercase;
`

const UpperText = props =>
    <StyledUpperText style={TextStyle(props)}>
        {getWeekDay(props.datetime)}
    </StyledUpperText>

const StyledUpper = styled(Animated.View)`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 16px 8px 16px;
`

const UpperView = props =>
    <StyledUpper style={{ opacity: CenterOpacity(props) }}>
        <Entypo
            size={24}
            color={'#FFF'}
            name={'menu'}
            onPress={props.navigation.openDrawer}
        />
        <UpperText {...props} />
        <Ionicons
            size={24}
            color={'#FFF'}
            name={`${Platform.OS ? 'ios' : 'md'}-search`}
        />
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

const HeaderStyle = {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column-reverse',
    paddingTop: getStatusBarHeight()
}

const Recognizer = props =>
    <GestureRecognizer
        style={HeaderStyle}
        onSwipeLeft={props.next}
        onSwipeRight={props.prev}>
        <BottomView {...props} />
        <CenterView {...props} />
        <UpperView {...props} />
    </GestureRecognizer>

const Layout = props =>
    <Background
        darkMode
        style={HeaderStyle}
        onLayout={props.onHeightLayout}
        darkBackground={props.foreground}>
        <Recognizer {...props} />
    </Background>

const Header = props => {
    const foreground = props.darkMode ? Theme.darkForeground : Theme.foreground;
    return <Layout {...props} foreground={foreground} />
}

Header.propTypes = {
    next: PropTypes.func,
    prev: PropTypes.func,
    darkMode: PropTypes.bool,
    datetime: PropTypes.number,
    height: PropTypes.object.isRequired,
    moveAnimation: PropTypes.any.isRequired,
    onHeightLayout: PropTypes.func.isRequired,
    opacityAnimation: PropTypes.any.isRequired
}

Header.defaultProps = {
    darkMode: true,
    datetime: 1570939200000,
    next: () => console.log('Next pressed'),
    prev: () => console.log('Prev pressed')
}

export default memo(Header);
