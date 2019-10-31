// Core
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Animated, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// Local 
import Checks from './Checks';
import Event from './items/Event';
import Header from './header/Header';

// Constants 
const MAX_HEIGHT = 245;
const MIN_HEIGHT = 45 + getStatusBarHeight();

const AnimatedHeight = props => props.scrollY.interpolate({
    inputRange: [0, MAX_HEIGHT - MIN_HEIGHT],
    outputRange: [MAX_HEIGHT, MIN_HEIGHT],
    extrapolate: 'clamp'
})

const StyledHeader = styled(Animated.View)`
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
`

const ScheduleHeader = props =>
    <StyledHeader style={{ height: AnimatedHeight(props) }}>
        <Header
            {...props}
            next={props.next}
            prev={props.prev}
            datetime={props.datetime}
            darkMode={props.darkMode} />
    </StyledHeader>

const Events = () => <>
    <Event eventype={'TALLER'} isFirst />
    <Event eventype={'FERIA'} isEven />
    <Event eventype={'MERIENDA'} />
    <Event eventype={'CONFERENCIA'} isEven isLast/>
    {/* <Event eventype={'FERIA'} />
    <Event eventype={'PONENCIA'} isEven />
    <Event eventype={'CONFERENCIA'} />
    <Event eventype={'MERIENDA'} isEven />
    <Event eventype={'PONENCIA'} />
    <Event eventype={'TALLER'} isEven /> */}
</>

const ScrollView = props =>
    <Animated.ScrollView
        onScroll={props.onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: MAX_HEIGHT }}>
        <Checks {...props} />
        <Events {...props} />
    </Animated.ScrollView>

const StyledLayout = styled(View)`
    flex: 1; 
    display: flex;
`

const Layout = props =>
    <StyledLayout>
        <ScrollView {...props} />
        <ScheduleHeader {...props} />
    </StyledLayout>

Layout.propTypes = {
    next: PropTypes.func,
    prev: PropTypes.func,
    darkMode: PropTypes.bool,
    datetime: PropTypes.number,
    onScroll: PropTypes.func.isRequired,
    scrollY: PropTypes.object.isRequired,
}

Layout.defaultProps = {
    darkMode: true,
    datetime: 1570939200000,
    next: () => console.log('Next pressed'),
    prev: () => console.log('Prev pressed'),
}

export default memo(Layout);
