// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
        <Header datetime={props.datetime} next={props.next} prev={props.prev}/>
        <ScrollView style={{ flex: 1 }}>
            <Event darkMode={props.darkMode} type={'odd'} eventype={'TALLER'}/>
            <Event darkMode={props.darkMode} type={'even'} eventype={'FERIA'}/>
            <Event darkMode={props.darkMode} type={'odd'} eventype={'PONENCIA'}/>
            <Event darkMode={props.darkMode} type={'even'} eventype={'CONFERENCIA'}/>
        </ScrollView>
    </StyledView>


class Schedule extends PureComponent {

    state = {
        dates: [],
        index: 0,
    }

    componentDidMount(){
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

    render() {
        const { dates, index } = this.state;
        const datetime = dates.length > 0 ? dates[index] : getStart();
        return <ScheduleView {...this.props} next={this.next} prev={this.prev} datetime={datetime}/>
    }

}

Schedule.propTypes = {
    darkMode: PropTypes.bool
}

Schedule.defaultProps = {
    darkMode: true
}

export default Schedule;
