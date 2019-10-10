import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Screen } from '../../app/Types';
import Background from '../../shared/modder/Background';
import Modder from '../../shared/modder/Modder';

import styled from 'styled-components/native';
import { View } from 'native-base';
import { Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';


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

const MoveIcon = ({ name }) => 
    <SimpleLineIcons
        name={name}
        size={26}
        color={'rgba(255, 255, 255, 0.5)'}
    />

const DayView = ({ day }) => 
    <StyledDay>
        <DayText>{day}</DayText>
    </StyledDay>

const DateView = ({ date }) => 
    <StyledDate>
        <MoveIcon name={'arrow-left'}/>
        <DateText>{date}</DateText>
        <MoveIcon name={'arrow-right'}/>
    </StyledDate>

const MonthView = ({ month }) =>
    <StyledMonth>
        <MonthText>{month}</MonthText>
    </StyledMonth>

const ScheduleHeader = props =>
    <Background darkMode darkPrimary={'#4568DC'} darkSecondary={'#B06AB3'}>
        <DayView day={'Lunes'}/>
        <DateView date={'26'}/>
        <MonthView month={'Noviembre 2019'}/>
    </Background>

const Schedule = props =>
    <StyledView {...props} style={{ flex: 1 }}>
        <ScheduleHeader {...props} />
    </StyledView>

Schedule.propTypes = {
    darkMode: PropTypes.bool
}

Schedule.defaultProps = {
    darkMode: true
}

export default Schedule;
