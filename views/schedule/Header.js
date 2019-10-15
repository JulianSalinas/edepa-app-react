// Core
import React from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

// Local 
import Switcher from './Switcher';
import Background from '../../shared/modder/Background';
import { getWeekDay, getMonth, getYear } from '../../scripts/Time';


const StyledTop = styled(View)`
    alignItems: center;
    display: flex;
    flexDirection: row;
    justifyContent: center;
`

const TopText = styled(Text)`
    color: #FFF;
    fontSize: 10;
    letterSpacing: 2.4;
    marginTop: 16;
    textTransform: uppercase;
`

const TopView = ({ day }) =>
    <StyledTop>
        <TopText>{day}</TopText>
    </StyledTop>

const StyledCenter = styled(View)`
    alignItems: center;
    display: flex;
    flexDirection: row;
    justifyContent: space-around;
`

const CenterText = styled(Text)`
    color: #FFF;
    fontSize: 70;
    fontWeight: 300;
    letterSpacing: 2.4;
`

const CenterView = ({ datetime, next, prev }) =>
    <StyledCenter>
        <Switcher onPress={prev} direction={'left'} />
        <CenterText>{getWeekDay(datetime)}</CenterText>
        <Switcher onPress={next} direction={'right'} />
    </StyledCenter>


const StyledBottom = styled(View)`
    alignItems: center;
    backgroundColor: rgba(255, 255, 255, 0.1);
    display: flex;
    flexDirection: row;
    justifyContent: center;
    padding: 16px;
`

const BottomText = styled(Text)`
    color: #FFF;
    fontSize: 10;
    letterSpacing: 2.4;
    textTransform: uppercase;
`

const BottomView = ({ datetime }) =>
    <StyledBottom>
        <BottomText>{`${getMonth(datetime)} ${getYear(datetime)}`}</BottomText>
    </StyledBottom>

const Header = ({ darkPrimary, darkSecondary, ...props }) =>
    <Background darkMode darkPrimary={darkPrimary} darkSecondary={darkSecondary}>
        <TopView {...props} />
        <CenterView {...props} />
        <BottomView {...props} />
    </Background>

Header.propTypes = {
    darkPrimary: PropTypes.string,
    darkSecondary: PropTypes.string,
    datetime: PropTypes.number,
    next: PropTypes.func,
    prev: PropTypes.func
}

Header.defaultProps = {
    darkPrimary: '#4568DC',
    darkSecondary: '#B06AB3',
    datetime: 1570939200000,
    next: () => console.log('Next pressed'),
    prev: () => console.log('Prev pressed')
}

export default Header;
