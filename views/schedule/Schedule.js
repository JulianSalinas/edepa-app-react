// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Animated, View, ScrollView } from 'react-native';

// Local 
import Event from './Event';
import Header from './Header';
import { getStart } from '../../scripts/Time';


const StyledView = styled(View)`
    display: flex;
    flex: 1; 
    flexDirection: column;
    justifyContent: space-between;
`

const ScheduleView = props =>
    <StyledView {...props} style={{ flex: 1 }}>
        <Animated.View style={props.style}>
            <Header
                next={props.next}
                prev={props.prev}
                datetime={props.datetime}
                style={{ flex: 1, justifyContent: 'space-between' }}
            />
        </Animated.View>
        <ScrollView
            style={{ flex: 1 }}
            scrollEventThrottle={16}
            onScroll={props.onScroll}>
            <Event darkMode={props.darkMode} type={'odd'} eventype={'TALLER'} />
            <Event darkMode={props.darkMode} type={'even'} eventype={'FERIA'} />
            <Event darkMode={props.darkMode} type={'odd'} eventype={'PONENCIA'} />
            <Event darkMode={props.darkMode} type={'even'} eventype={'CONFERENCIA'} />
            <Event darkMode={props.darkMode} type={'odd'} eventype={'PONENCIA'} />
            <Event darkMode={props.darkMode} type={'even'} eventype={'CONFERENCIA'} />
            <Event darkMode={props.darkMode} type={'odd'} eventype={'PONENCIA'} />
            <Event darkMode={props.darkMode} type={'even'} eventype={'CONFERENCIA'} />
        </ScrollView>
    </StyledView>

class Schedule extends PureComponent {

    state = {
        dates: [],
        index: 0,
        minH: 45, // 45
        maxH: 210, // 166
        scrollY: new Animated.Value(0),
    }

    componentDidMount() {
        this.setState({ dates: [1570939200000, 1571025600000, 1570852800000] })
    }

    next = () => this.setState(state => {
        const restart = state.index === state.dates.length - 1;
        return { index: restart ? 0 : state.index + 1 };
    })

    prev = () => this.setState(state => {
        const restart = state.index === 0;
        return { index: restart ? state.dates.length - 1 : state.index - 1 };
    })

    onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
    )

    onMaxHeightLayout = event => this.setState({
        maxH: event.nativeEvent.layout.height
    }, () => console.log(`Max Height Fixed: ${this.state.maxH}`))

    onMinHeightLayout = event => this.setState({
        minH: event.nativeEvent.layout.height
    }, () => console.log(`Min Height Fixed: ${this.state.minH}`))

    render() {

        const { maxH, minH } = this.state; 

        const heightH = this.state.scrollY.interpolate({
            inputRange: [0, maxH - minH],
            outputRange: [maxH, minH],
            extrapolate: 'clamp'
        })

        const { dates, index } = this.state;
        const datetime = dates.length > 0 ? dates[index] : getStart();

        return <ScheduleView
            {...this.props}
            next={this.next}
            prev={this.prev}
            datetime={datetime}
            onScroll={this.onScroll}
            style={{ height: heightH }}
        />

    }

}

Schedule.propTypes = {
    darkMode: PropTypes.bool
}

Schedule.defaultProps = {
    darkMode: true
}

export default Schedule;
