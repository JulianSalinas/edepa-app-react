// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Platform, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';


const getRowIconOpacity = isPressed => {
    const opacity = isPressed ? 0.9 : 0.5;
    return `rgba(255, 255, 255, ${opacity})`;
}

const SwitcherIcon = ({ icon, isPressed }) =>
    <SimpleLineIcons
        name={icon}
        size={26}
        color={getRowIconOpacity(isPressed)}
    />

const StyledTouchable = styled(TouchableHighlight)`
    padding: 16px;
`

const TouchableSwitcher = props =>
    <StyledTouchable
        onPress={props.onPress}
        onEnter={props.onEnter}
        onLeave={props.onLeave}
        underlayColor={'#FFFFFF00'}>
        <SwitcherIcon {...props} />
    </StyledTouchable>

const StyledClickable = styled(View)`
    cursor: pointer;
    padding: 16px;
`

const ClickableSwitcher = props =>
    <StyledClickable
        onClick={props.onPress}
        onMouseEnter={props.onLeave}
        onMouseLeave={props.onEnter}>
        <SwitcherIcon {...props}/>
    </StyledClickable>

const SwitcherLayout = props => Platform.OS === 'web' ?
    <ClickableSwitcher {...props} /> : 
    <TouchableSwitcher {...props} /> 


class Switcher extends PureComponent {

    state = { isPressed: false }

    onEnter = () => this.setState({
        isPressed: false
    })

    onLeave = () => this.setState({
        isPressed: true
    })

    render() {
        return (
            <SwitcherLayout
                {...this.props}
                icon={`arrow-${this.props.direction}`}
                isPressed={this.state.isPressed}
                onEnter={this.onEnter}
                onLeave={this.onLeave}
            />
        )
    }

}

Switcher.propTypes = {
    direction: PropTypes.oneOf(['left', 'right']),
    onPress: PropTypes.func
}

Switcher.defaultProps = {
    direction: 'right',
    onPress: () => console.log('Switcher pressed')
}

export default Switcher;
