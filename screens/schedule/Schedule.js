// Core
import React, { PureComponent } from 'react';

// Libs 
import { Animated } from 'react-native';

// Local 
import Layout from './Layout';
import Loading from '../loading/Indicator';
import { withMode } from '../../theme/ThemeMode';
import { getStart, addTime } from '../../scripts/Time';

class Schedule extends PureComponent {

    state = {
        dates: [],
        current: 0,
        isLoading: false,
        scrollY: new Animated.Value(0)
    }

    componentDidMount() {
        const base = 1570939200000;
        const dates = [0, 1, 2, 3].map((_, index) => addTime(base, index));
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

    render() {

        const { dates, current } = this.state;
        const datetime = dates.length > 0 ? dates[current] : getStart();

        return this.state.isLoading ? <Loading /> : <Layout
            {...this.props}
            datetime={datetime}
            next={this.next}
            prev={this.prev}
            onScroll={this.onScroll}
            scrollY={this.state.scrollY}
        />

    }

}

export default withMode(Schedule);
