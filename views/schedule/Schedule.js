// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';

// Local 
import Loading from '../loading/Loading';
import Background from '../../shared/modder/Background';
import { addTime, timeInfo, getStart, getWeekDay } from '../../scripts/Time';


const StyledView = styled(View)`
    display: flex;
    flex: 1; 
    flexDirection: column;
    justifyContent: space-between;
`

const StyledDay = styled(View)`
    alignItems: center;
    display: flex;
    flexDirection: row;
    justifyContent: center;
`

const DayText = styled(Text)`
    color: #FFF;
    fontSize: 10;
    letterSpacing: 2.4;
    marginTop: 16;
    textTransform: uppercase;
`

const StyledDate = styled(View)`
    alignItems: center;
    display: flex;
    flexDirection: row;
    justifyContent: space-around;
`

const DateText = styled(Text)`
    color: #FFF;
    fontSize: 70;
    fontWeight: 300;
    letterSpacing: 2.4;
`

const MonthText = styled(Text)`
    color: #FFF;
    fontSize: 10;
    letterSpacing: 2.4;
    textTransform: uppercase;
`

const StyledMonth = styled(View)`
    alignItems: center;
    backgroundColor: rgba(255, 255, 255, 0.1);
    display: flex;
    flexDirection: row;
    justifyContent: center;
    padding: 16px;
`

const StyledTouchable = styled(TouchableHighlight)`
    padding: 16px;
`

const MoveIcon = ({ name, isPressed }) =>
    <SimpleLineIcons
        name={name}
        size={26}
        color={isPressed ? '#FFF' : 'rgba(255, 255, 255, 0.5)'}
    />

const DayView = ({ day }) =>
    <StyledDay>
        <DayText>{day}</DayText>
    </StyledDay>

const DateLayout = props => 
    <StyledTouchable 
        onPress={props.onPress} 
        onHideUnderlay={props.onHideUnderlay}
        onShowUnderlay={props.onShowUnderlay}
        underlayColor={'#FFFFFF00'}>
        <MoveIcon name={props.icon} isPressed={props.isPressed}/>
    </StyledTouchable>


class DateRow extends PureComponent {

    state = { isPressed: false }

    onHideUnderlay = () => this.setState({
        isPressed: false
    })

    onShowUnderlay = () => this.setState({
        isPressed: true 
    })

    render() {
        return (
            <DateLayout
                {...this.props}
                isPressed={this.state.isPressed}
                onHideUnderlay={this.onHideUnderlay}
                onShowUnderlay={this.onShowUnderlay}
            />
        )
    }

}

const DateView = ({ weekDay, next, prev }) =>
    <StyledDate>
        <DateRow onPress={prev} icon={'arrow-left'} />
        <DateText>{weekDay}</DateText>
        <DateRow onPress={next} icon={'arrow-right'} />
    </StyledDate>

const BottomView = ({ month, year }) =>
    <StyledMonth>
        <MonthText>{`${month} ${year}`}</MonthText>
    </StyledMonth>

const ScheduleHeader = props =>
    <Background darkMode darkPrimary={'#4568DC'} darkSecondary={'#B06AB3'}>
        <DayView day={props.time.day} />
        <DateView weekDay={props.time.weekDay} next={props.next} prev={props.prev} />
        <BottomView month={props.time.month} year={props.time.year} />
    </Background>

const ScheduleLayout = props => 
    <StyledView {...props} style={{ flex: 1 }}>
        <ScheduleHeader {...props}/>
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
        const time = timeInfo(dates.length > 0 ? dates[index] : getStart());
        return <ScheduleLayout {...this.props} next={this.next} prev={this.prev} time={time}/>
    }

}

Schedule.propTypes = {
    darkMode: PropTypes.bool
}

Schedule.defaultProps = {
    darkMode: true
}

export default Schedule;
