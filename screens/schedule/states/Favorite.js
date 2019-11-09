// Core 
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { useTheme } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';
import { View, Animated, Easing } from 'react-native';

// Locals
import { Platform } from '@unimodules/core';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ClickableFavorite = styled(View)`
    width: 40;
    height: 40;
    display: flex;
    align-items: center;
    justify-content: flex-end; 
`

const TouchableFavorite = styled(TouchableWithoutFeedback)`
    width: 40;
    height: 40;
    display: flex;
    align-items: center;
    justify-content: flex-end; 
`

const FavoriteIcon = props =>
    <AntDesign
        color={props.isActive ? '#FFC107' : props.palette.secondaryFont}
        name={props.isActive ? 'star' : 'staro'} size={20}
    />

const FavoriteWeb = props =>
    <ClickableFavorite onClick={props.onPress}>
        <Animated.View style={props.style}>
            <FavoriteIcon {...props} isActive={props.isActive} />
        </Animated.View>
    </ClickableFavorite>

const FavoriteMobile = props =>
    <TouchableFavorite onPress={props.onPress}>
        <Animated.View style={props.style}>
            <FavoriteIcon {...props} isActive={props.isActive} />
        </Animated.View>
    </TouchableFavorite>

const FavoritePlatform = props => Platform.OS === 'web' ?
    <FavoriteWeb {...props} /> :
    <FavoriteMobile {...props} />

const FavoriteLayout = props => {
    const darkMode = useTheme() === 'dark';
    return <FavoritePlatform {...props} darkMode={darkMode} />
}

class Favorite extends PureComponent {

    constructor(props) {
        super(props);
        this.rotateValue = new Animated.Value(0);
    }

    timing = {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true
    }

    interpolate = {
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    }

    onPress = () => {
        this.rotateValue.setValue(0);
        Animated.timing(this.rotateValue, this.timing).start();
        this.props.toggleActive();
    }

    render() {
        let rotation = this.rotateValue.interpolate(this.interpolate);
        let style = { transform: [{ rotate: rotation }] };
        return <FavoriteLayout {...this.props} style={style} onPress={this.onPress} />
    }

}

Favorite.propTypes = {
    isActive: PropTypes.bool,
    toggleActive: PropTypes.func,
}

Favorite.defaultProps = {
    isActive: true,
    toggleActive: () => console.log('Button pressed!')
}

export default Favorite;