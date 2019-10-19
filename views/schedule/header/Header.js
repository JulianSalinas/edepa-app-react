// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import { Animated } from 'react-native';

// Local 
import Layout from './Layout';


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

        return <Layout 
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
    datetime: PropTypes.number,
    next: PropTypes.func,
    prev: PropTypes.func,
    style: PropTypes.object
}

Header.defaultProps = {
    datetime: 1570939200000,
    next: () => console.log('Next pressed'),
    prev: () => console.log('Prev pressed'),
    style: {}
}

export default Header;
