// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { Caption } from 'react-native-paper';
import { View, Text, Image } from 'react-native';

// Local 
import Flat from '../../../colors/Flat';
import Shadow from '../../../shared/Shadow';
import { withContext } from '../../../app/AppContext';
import { getDay, getMonth } from '../../../scripts/Time';


const DateCaption = props =>
    <Caption style={{ color: '#FFF', fontWeight: '300' }} >
        {props.caption}
    </Caption>

const StyledDateText = styled(Text)`
    color: #FFF;
    font-size: 24;
    font-weight: bold;
`

const DateText = props =>
    <StyledDateText style={{ color: '#FFF', fontSize: 24, fontWeight: 'bold' }}>
        {props.date ? `${getDay(props.date)} ${getMonth(props.date)}` : 'cargando...'}
    </StyledDateText>

const StyledDateDescription = styled(View)`
    left: 16;
    bottom: 8;
    position: absolute;
`

const DateDescription = props =>
    <StyledDateDescription>
        <DateCaption {...props} />
        <DateText {...props} />
    </StyledDateDescription>


const StyledDateImage = styled(Image)`
    width: 110px;
    height: 110px;
`

const StyledDateImageContainer = styled(View)`
    right: 0;
    bottom: 0;
    position: absolute;
`

const DateImageContainer = () =>
    <StyledDateImageContainer>
        <StyledDateImage source={require('../../../assets/images/teacher.jpg')} />
    </StyledDateImageContainer>

const StyledDateContent = styled(View)`
    flex: 1;
    position: relative;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

const DateContent = props =>
    <StyledDateContent>
        <DateImageContainer {...props} />
        <DateDescription {...props} />
    </StyledDateContent>

const StyledStartDateContainer = styled(View)`
    width: 248; 
    height: 140; 
    border-top-left-radius: 8px;
    border-top-right-radius: 8px; 
`

const StartDateContainer = props =>
    <StyledStartDateContainer style={{ ...Shadow, backgroundColor: Flat.MIDNIGHT_BLUE }}>
        <DateContent {...props} />
    </StyledStartDateContainer>

const StyledStartDate = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 16px 8px 16px;
`

const StartDate = props =>
    <StyledStartDate>
        <StartDateContainer {...props} />
    </StyledStartDate>

StartDate.propsTypes = {
    date: PropTypes.number,
    caption: PropTypes.string
}

StartDate.defaultProps = {
    date: null,
    caption: 'Primer día'
}

export default withContext(memo(StartDate));