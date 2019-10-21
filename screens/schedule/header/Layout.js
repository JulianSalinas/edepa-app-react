// Core
import React, { memo, PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View, Animated, Text } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

// Local 
import Switcher from './Switch';
import Theme from '../../../app/Theme';
import Background from '../../../shared/modder/Background';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { getWeekDay, getMonth, getYear, getDay } from '../../../scripts/Time';


const FontScale = ({ height }) => height.interpolate({
    inputRange: [200 - 45, 200],
    outputRange: [0.7, 1],
    extrapolate: 'clamp'
})

const Transform = props => ([
    { translateX: props.moveAnimation.x },
    { translateY: props.moveAnimation.y }
])

const TextStyle = props => ({
    opacity: props.opacityAnimation,
    transform: Transform(props)
})

const StyledTop = styled(View)`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const TopText = styled(Animated.Text)`
    color: #FFF;
    font-size: 10;
    letter-spacing: 2.4;
    margin-top: 16;
    text-transform: uppercase;
`

const Upper = ({ datetime, ...props }) =>
    <StyledTop>
        <TopText style={TextStyle(props)}>
            {getWeekDay(datetime)}
        </TopText>
    </StyledTop>

const StyledCenter = styled(Animated.View)`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const CenterText = styled(Animated.Text)`
    color: #FFF;
    font-size: 70;
    font-weight: 700;
    letter-spacing: 2.4;
`

const CenterOpacity = ({ height }) => height.interpolate({
    inputRange: [200 - 45 * 2, 200 - 45],
    outputRange: [0.01, 1],
    extrapolate: 'clamp'
})

const CenterStyle = props => ({
    opacity: props.opacityAnimation,
    transform: [...Transform(props), { scale: FontScale(props) }]
})

const Center = ({ datetime, next, prev, ...props }) =>
    <Animated.View style={{ marginBottom: 16, opacity: CenterOpacity(props) }}>
        <StyledCenter style={{  }}>
            <Switcher onPress={prev} direction={'left'} />
            <CenterText style={CenterStyle(props)}>
                {getDay(datetime)}
            </CenterText>
            <Switcher onPress={next} direction={'right'} />
        </StyledCenter>
        <FilterOptions {...props}/>
    </Animated.View>

const StyledBottom = styled(TouchableWithoutFeedback)`
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 16px;
`

const BottomText = styled(Animated.Text)`
    color: #FFF;
    font-size: 10;
    letter-spacing: 2.4;
    text-transform: uppercase;
`

const Bottom = ({ datetime, next, ...props }) =>
    <StyledBottom onPress={next}>
        <BottomText style={TextStyle(props)}>
            {`${getDay(datetime)}° ${getMonth(datetime)}, ${getYear(datetime)}`}
        </BottomText>
    </StyledBottom>

const buttonShadow = {
    elevation: 5,
    shadowColor: "#000",
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 }
}

const ToggleFilter = props => 
    <TouchableWithoutFeedback onPressOut={props.onPress} style={[{
        minWidth: 96,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: props.isFocused ? '#FFF' : '#FFFFFF00',
        borderRadius: 48,
        paddingVertical: 4,
        paddingHorizontal: 16,
    }, props.isFocused ? buttonShadow : {} ]}>
        <BottomText style={{ 
            color: props.isFocused ? '#000' : '#FFF'
        }}>
            { props.text }
        </BottomText>

    </TouchableWithoutFeedback>

const Filter = props => 
    <View style={{
        display: 'flex',
        alignItems: 'center',
    }}>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 48,
        }}>
            {
                props.filters.map((filter, index) => 
                    <ToggleFilter 
                        key={filter} 
                        text={filter} 
                        isFocused={index === props.active} 
                        onPress={() => props.onPress(index)}/>
                )
            }
        </View>
    </View>


class FilterOptions extends PureComponent {

    state = {
        active: 0,
        filters: ['Todos', 'Favoritos']
    }

    onPress = index => {
        console.log('Toggle pressed')
        this.setState({ 
            active: index 
        })
    }

    render() {
        return <Filter 
            {...this.props}
            onPress={this.onPress}
            active={this.state.active} 
            filters={this.state.filters} 
        />
    }

}

const Layout = props =>
    <Background
        darkMode
        style={props.style}
        onLayout={props.onHeightLayout}
        darkBackground={props.foreground}>
        <GestureRecognizer
            style={props.style}
            onSwipeLeft={props.next}
            onSwipeRight={props.prev}>
            <Bottom {...props} />
            <Center {...props} />
            <Upper {...props} />
        </GestureRecognizer>
    </Background>

Layout.propTypes = {
    next: PropTypes.func,
    prev: PropTypes.func,
    style: PropTypes.object,
    datetime: PropTypes.number,
    height: PropTypes.object.isRequired,
    onHeightLayout: PropTypes.func.isRequired,
    foreground: PropTypes.arrayOf(PropTypes.string),
    moveAnimation: PropTypes.any.isRequired,
    opacityAnimation: PropTypes.any.isRequired,
}

Layout.defaultProps = {
    style: {},
    datetime: 1570939200000,
    next: () => console.log('Next pressed'),
    prev: () => console.log('Prev pressed'),
    foreground: Theme.foreground,
}

export default memo(Layout);
