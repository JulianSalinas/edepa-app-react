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
        <Section title={'Testing event'} darkMode={props.darkMode} />
        <Event darkMode={props.darkMode} type={'odd'} eventype={'TALLER'} style={{ height: 100 }}/>
        {/* <Event darkMode={props.darkMode} type={'even'} eventype={'FERIA'} style={{ height: 125 }}/> */}
        {/* <Event darkMode={props.darkMode} type={'odd'} eventype={'PONENCIA'} style={{ height: 150 }}/> */}
        {/* <Event darkMode={props.darkMode} type={'even'} eventype={'CONFERENCIA'} style={{ height: 175 }}/> */}
        {/* <Item darkMode={props.darkMode} title={person.title} subtitle={person.subtitle}/> */}
    </View>

TestScreen.propTypes = {
    darkMode: PropTypes.bool.isRequired
}

TestScreen.defaultProps = {
    darkMode: false
}

export default memo(TestScreen);