// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import { Animated } from 'react-native';

// Local 
import Layout from './Layout';
import Theme from '../../../app/Theme';


class Header extends PureComponent {

    distance = 45;
    fadeTime = 145;
    moveTime = 100;

    state = {
        height: new Animated.Value(200),
        moveAnimation: new Animated.ValueXY(),
        opacityAnimation: new Animated.Value(1)
    }

    onHeightLayout = Animated.event(
        [{ nativeEvent: { layout: { height: this.state.height } } }]
    )

    moveValue = (distance, duration) => ({
        toValue: { x: distance, y: 0 },
        duration: duration,
        useNativeDriver: true
    })

    moveAnimation = (distance, duration = 0) => {
        const value = this.state.moveAnimation;
        return Animated.timing(value, this.moveValue(distance, duration));
    }

    fadeValue = value => ({
        toValue: value,
        duration: this.fadeTime,
        useNativeDriver: true
    })

    fadeAnimation = value => {
        const opacity = this.state.opacityAnimation;
        return Animated.timing(opacity, this.fadeValue(value))
    }

    swipeAnimation = (distance, value) => Animated.parallel([
        this.moveAnimation(distance, this.moveTime),
        this.fadeAnimation(value)
    ])

    headAnimation = direction => Animated.sequence([
        this.swipeAnimation(direction * this.distance, 0),
        this.moveAnimation(-direction),
        this.swipeAnimation(0, 1),
    ]);

    next = () => {
        setTimeout(this.props.next, this.fadeTime);
        this.headAnimation(-1).start();
    }

    prev = () => {
        setTimeout(this.props.prev, this.fadeTime);
        this.headAnimation(1).start();
    }

    render() {
        return <Layout
            {...this.props}
            next={this.next}
            prev={this.prev}
            height={this.state.height}
            onHeightLayout={this.onHeightLayout}
            moveAnimation={this.state.moveAnimation}
            opacityAnimation={this.state.opacityAnimation}
        />
    }

}

Header.propTypes = {
    datetime: PropTypes.number,
    next: PropTypes.func,
    prev: PropTypes.func,
    style: PropTypes.object,
    foreground: PropTypes.arrayOf(PropTypes.string),
}

Header.defaultProps = {
    style: {},
    datetime: 1570939200000,
    next: () => console.log('Next pressed'),
    prev: () => console.log('Prev pressed'),
    foreground: Theme.darkForeground,
}

export default Header;
