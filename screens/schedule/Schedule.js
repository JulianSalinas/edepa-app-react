// Core
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// Libs 
import styled from 'styled-components/native';
import { Animated, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// Local 
import Checks from './Checks';
import Event from './items/Event';
import Header from './header/Header';
import Gradient from '../../colors/Gradient';
import { getStart, addTime } from '../../scripts/Time';


const StyledHeader = styled(Animated.View)`
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
`

const HeaderStyle = {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column-reverse',
    paddingTop: getStatusBarHeight()
}

const ScheduleHeader = props =>
    <StyledHeader style={{ height: props.heightH }}>
        <Header
            next={props.next}
            prev={props.prev}
            datetime={props.datetime}
            style={HeaderStyle} />
    </StyledHeader>

const StyledLayout = styled(View)`
    flex: 1; 
    display: flex;
`

const ScheduleLayout = props =>
    <StyledLayout>
        <Animated.ScrollView
            onScroll={props.onScroll}
            scrollEventThrottle={16}
            contentContainerStyle={{ paddingTop: props.maxH }}>
            <Checks {...props} />
            <Event eventype={'TALLER'} isFirst />
            <Event eventype={'FERIA'} isEven />
            <Event eventype={'PONENCIA'} />
            <Event eventype={'CONFERENCIA'} isEven />
            <Event eventype={'TALLER'} />
            <Event eventype={'FERIA'} isEven />
            <Event eventype={'PONENCIA'} />
            <Event eventype={'CONFERENCIA'} isEven />
        </Animated.ScrollView>
        <ScheduleHeader {...props} />
    </StyledLayout>


class Schedule extends PureComponent {

    maxH = 230;
    minH = 45 + getStatusBarHeight();

    state = {
        dates: [],
        colors: Object.values(Gradient),
        current: 0,
        scrollY: new Animated.Value(0)
    }

    componentDidMount() {
        const base = 1570939200000;
        const dates = Object.keys(Gradient).map((_, index) => addTime(base, index));
        this.setState({ dates });
    }

    next = () => this.setState(state => {
        const restart = state.current === state.dates.length - 1;
        return { current: restart ? 0 : state.current + 1 };
    })

    prev = () => this.setState(state => {
        const restart = state.current === 0;
        return { current: restart ? state.dates.length - 1 : state.current - 1 };
    })

    onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
    )

    heightH = this.state.scrollY.interpolate({
        inputRange: [0, this.maxH - this.minH],
        outputRange: [this.maxH, this.minH],
        extrapolate: 'clamp'
    })

    render() {

        const { dates, current } = this.state;
        const datetime = dates.length > 0 ? dates[current] : getStart();

        return <ScheduleLayout
            {...this.props}
            next={this.next}
            prev={this.prev}
            maxH={this.maxH}
            minH={this.minH}
            heightH={this.heightH}
            datetime={datetime}
            onScroll={this.onScroll}
        />

    }

}

export default Schedule;
