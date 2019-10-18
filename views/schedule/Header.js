// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Text, View, Animated } from 'react-native';

// Local 
import Switcher from './Switcher';
import Background from '../../shared/modder/Background';
import { getWeekDay, getMonth, getYear, getDay } from '../../scripts/Time';


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

const TopView = ({ datetime }) =>
    <StyledTop>
        <TopText>{getWeekDay(datetime)}</TopText>
    </StyledTop>

const StyledCenter = styled(Animated.View)`
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

const CenterView = ({ datetime, next, prev, centerStyle }) =>
    <StyledCenter style={centerStyle}>
        <Switcher onPress={prev} direction={'left'} />
        <CenterText>{getDay(datetime)}</CenterText>
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

const HeaderLayout = props =>
    <Background
        darkMode
        style={props.style}
        onLayout={props.onHeightLayout}
        darkPrimary={props.darkPrimary}
        darkSecondary={props.darkSecondary}>
        <TopView {...props} />
        <CenterView {...props} />
        <BottomView {...props} />
    </Background>


class Header extends PureComponent {

    state = {
        heightH: new Animated.Value(200)
    }

    onHeightLayout = Animated.event(
        [{ nativeEvent: { layout: { height: this.state.heightH } } } ]
    )

    render() {


        // const fontScale = this.state.fontScale.interpolate({
        //     inputRange: [0, 200 - 166],
        //     outputRange: [1, 0],
        //     extrapolate: 'clamp'
        // })

        const fontOpacity = this.state.heightH.interpolate({
            inputRange: [200 - 45, 200],
            outputRange: [0.01, 1],
            extrapolate: 'clamp'
        });

        const fontScale = this.state.heightH.interpolate({
            inputRange: [200 - 45, 200],
            outputRange: [0.9, 1],
            extrapolate: 'clamp'
        });

        return <HeaderLayout 
            {...this.props} 
            onHeightLayout={this.onHeightLayout}
            centerStyle={{
                opacity: fontOpacity,
                transform: [
                    { scale: fontScale }
                ]
            }}
        />
    }

}

Header.propTypes = {
    darkPrimary: PropTypes.string,
    darkSecondary: PropTypes.string,
    datetime: PropTypes.number,
    next: PropTypes.func,
    prev: PropTypes.func,
    style: PropTypes.object
}

Header.defaultProps = {
    darkPrimary: '#4568DC',
    darkSecondary: '#B06AB3',
    datetime: 1570939200000,
    next: () => console.log('Next pressed'),
    prev: () => console.log('Prev pressed'),
    style: {}
}

export default Header;
