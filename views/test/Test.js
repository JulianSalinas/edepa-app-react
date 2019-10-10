// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import { View } from 'native-base';

// Locals
import Item from '../../shared/common/Item';
import Section from '../../shared/common/Section';


const person = {
    title: 'Julian Salinas',
    subtitle: 'Software Engineer'
}

const TestScreen = props => 
    <View style={{
        display: "flex",
        flexDirection: "column"
    }}>
        <Section />
        <Item title={person.title} subtitle={person.subtitle}/>
    </View>

TestScreen.propTypes = {
    darkMode: PropTypes.bool.isRequired
}

TestScreen.defaultProps = {
    darkMode: false
}

export default memo(TestScreen);