// Core 
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { View, Animated, Easing } from 'react-native';

// Locals
import { Platform } from '@unimodules/core';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// Constants
const LIGHT_TRANSPARENT = 'rgba(0, 0, 0, 0.6)';
const DARK_TRANSPARENT = 'rgba(255, 255, 255, 0.6)';


const ClickableEnrolled = styled(View)`
    width: 40;
    height: 40;
    display: flex;
    alignItems: center;
    justifyContent: flex-end; 
    transform: translateY(2px); 
`

const TouchableEnrolled = styled(TouchableWithoutFeedback)`
    width: 40;
    height: 40;
    display: flex;
    alignItems: center;
    justifyContent: flex-end; 
    transform: translateY(2px); 
`

const EnrolledIcon = ({ darkMode, isActive }) =>
    <Feather
        color={isActive ? '#E91E63' : darkMode ? DARK_TRANSPARENT : LIGHT_TRANSPARENT}
        name={isActive ? 'user-plus' : 'user-plus'} size={24}
    />

const EnrolledWeb = props =>
    <ClickableEnrolled onClick={props.onPress}>
        <Animated.View style={props.style}>
            <EnrolledIcon darkMode={props.darkMode} isActive={props.isActive} />
        </Animated.View>
    </ClickableEnrolled>

const EnrolledMobile = props =>
    <TouchableEnrolled onPress={props.onPress}>
        <Animated.View style={props.style}>
            <EnrolledIcon darkMode={props.darkMode} isActive={props.isActive} />
        </Animated.View>
    </TouchableEnrolled>

const EnrolledPlatform = props => Platform.OS === 'web' ?
    <EnrolledWeb {...props} /> :
    <EnrolledMobile {...props} />


class Enrolled extends PureComponent {

    constructor(props) {
        super(props);
        this.springValue = new Animated.Value(1);
    }

    spring = {
        toValue: 1,
        friction: 1
    }

    onPress = () => {
        this.springValue.setValue(0);
        Animated.spring(this.springValue, this.spring).start();
        this.props.toggleActive();
    }

    render() {
        let style = { transform: [{ scale: this.springValue }] };
        return <EnrolledPlatform onPress={this.onPress} {...this.props} style={style} />
    }

}

Enrolled.propTypes = {
    darkMode: PropTypes.bool,
    isActive: PropTypes.bool,
    toggleActive: PropTypes.func,
}

Enrolled.defaultProps = {
    darkMode: false,
    isActive: true,
    toggleActive: () => console.log('Button pressed!')
}

export default Enrolled;