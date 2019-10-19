// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import { Animated } from 'react-native';

// Local 
import Layout from './Layout';
import Theme from '../../../app/Theme';


class Header extends PureComponent {

    state = {
        height: new Animated.Value(200)
    }

    onHeightLayout = Animated.event(
        [{ nativeEvent: { layout: { height: this.state.height } } }]
    )

    render() {

        return <Layout
            {...this.props}
            height={this.state.height}
            onHeightLayout={this.onHeightLayout}
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
    foreground: Theme.foreground,
}

export default Header;
