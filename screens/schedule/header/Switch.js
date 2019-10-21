// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Animated, Platform, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';


const SwitchTransform = ({ springValue }) => {
    return [{ scale: springValue }];
}

const SwitchOpacity = ({ springValue }) => springValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.1, 0.5],
    extrapolate: 'clamp'
})

const SwitchIcon = props => 
    <SimpleLineIcons
        size={26}
        color={'#FFF'}
        name={props.icon}
    />

const SwitchAnimation = props => 
    <Animated.View style={{
        opacity: SwitchOpacity(props),
        transform: SwitchTransform(props)
    }}>
        <SwitchIcon {...props}/>
    </Animated.View>

const StyledTouchable = styled(TouchableHighlight)`
    padding: 16px;
`

const TouchableSwitch = props =>
    <StyledTouchable
        onPress={props.onPress}
        underlayColor={'#FFFFFF00'}>
        <SwitchAnimation {...props} />
    </StyledTouchable>

const StyledClickable = styled(View)`
    cursor: pointer;
    padding: 16px;
`

const ClickableSwitch = props =>
    <StyledClickable
        onClick={props.onPress}>
        <SwitchAnimation {...props}/>
    </StyledClickable>

const SwitchLayout = props => Platform.OS === 'web' ?
    <ClickableSwitch {...props} /> : 
    <TouchableSwitch {...props} /> 


class Switch extends PureComponent {

    spring = {
        toValue: 1,
        friction: 1,
        useNativeDriver: true
    }

    constructor(props) {
        super(props);
        this.springValue = new Animated.Value(1);
    }

    onPress = () => {
        this.springValue.setValue(0);
        Animated.spring(this.springValue, this.spring).start();
        this.props.onPress();
    }

    render() {

        return (
            <SwitchLayout
                {...this.props}
                onPress={this.onPress}
                springValue={this.springValue}
                icon={`arrow-${this.props.direction}`}
            />
        )

    }

}

Switch.propTypes = {
    direction: PropTypes.oneOf(['left', 'right']),
    onPress: PropTypes.func
}

Switch.defaultProps = {
    direction: 'right',
    onPress: () => console.log('Switch pressed')
}

export default Switch;
