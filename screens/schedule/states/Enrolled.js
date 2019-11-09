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
import { useTheme } from 'react-navigation';
import { withContext } from '../../../app/AppContext';

const ClickableEnrolled = styled(View)`
    width: 40;
    height: 40;
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    transform: translateY(2px); 
`

const TouchableEnrolled = styled(TouchableWithoutFeedback)`
    width: 40;
    height: 40;
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    transform: translateY(2px); 
`

const EnrolledIcon = props =>
    <Feather
        color={props.isActive ? '#E91E63' : props.palette.secondaryFont}
        name={props.isActive ? 'user-plus' : 'user-plus'} size={24}
    />

const EnrolledWeb = props =>
    <ClickableEnrolled onClick={props.onPress}>
        <Animated.View style={props.style}>
            <EnrolledIcon {...props} isActive={props.isActive} />
        </Animated.View>
    </ClickableEnrolled>

const EnrolledMobile = props =>
    <TouchableEnrolled onPress={props.onPress}>
        <Animated.View style={props.style}>
            <EnrolledIcon {...props} isActive={props.isActive} />
        </Animated.View>
    </TouchableEnrolled>

const EnrolledPlatform = props => Platform.OS === 'web' ?
    <EnrolledWeb {...props} /> :
    <EnrolledMobile {...props} />

const EnrolledLayout = props => {
    const darkMode = useTheme() === 'dark';
    return <EnrolledPlatform {...props} darkMode={darkMode} />
}

class Enrolled extends PureComponent {

    constructor(props) {
        super(props);
        this.springValue = new Animated.Value(1);
    }

    spring = {
        toValue: 1,
        friction: 1,
        useNativeDriver: true
    }

    onPress = () => {
        this.springValue.setValue(0);
        Animated.spring(this.springValue, this.spring).start();
        this.props.toggleActive();
    }

    render() {
        let style = { transform: [{ scale: this.springValue }] };
        return <EnrolledLayout {...this.props} style={style} onPress={this.onPress} />
    }

}

Enrolled.propTypes = {
    isActive: PropTypes.bool,
    toggleActive: PropTypes.func,
}

Enrolled.defaultProps = {
    isActive: true,
    toggleActive: () => console.log('Button pressed!')
}

export default withContext(Enrolled);