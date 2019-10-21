// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import { View } from 'react-native';

// Locals
import Item from '../people/Person';
import Section from '../../shared/Section';
import Event from '../schedule/items/Event';
import Decoration from '../schedule/items/Sideway';
import Edepa from '../../shared/Edepa';
import Background from '../../shared/modder/Background';
// import TabBar from "@mindinventory/react-native-tab-bar-interaction";

const person = {
    title: 'Julian Salinas',
    subtitle: 'Software Engineer'
}

const TestScreen = props =>
    <View style={{
        flex: 1,
        display: "flex",
        flexDirection: "column"
    }}>

    </View>

TestScreen.propTypes = {
    darkMode: PropTypes.bool.isRequired
}

TestScreen.defaultProps = {
    darkMode: false
}

export default memo(TestScreen);