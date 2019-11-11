// Core
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import { SectionList } from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';

// Local 
import Item from './widgets/Person';
import Section from '../../shared/Section';
import { PersonTypes } from '../../app/AppTypes';
import { withContext } from '../../app/AppContext';
import { FlatList } from 'react-native-gesture-handler';
import Toolbar from '../../shared/Toolbar';
import { getStatusBarHeight } from 'react-native-status-bar-height';


const getItem = darkMode => ({ item }) =>
    <Item
        darkMode={darkMode}
        title={item.completeName}
        subtitle={item.personalTitle}
    />

const getSection = darkMode => ({ section }) =>
    <Section
        darkMode={darkMode}
        title={section.title}
        style={{ marginBottom: 8 }}
    />

const PeopleList = props => <SectionList
    style={{ flex: 1 }}
    sections={props.sections}
    keyExtractor={item => item.key}
    renderItem={getItem(props.darkMode)}
    renderSectionHeader={getSection(props.darkMode)}
    // stickySectionHeadersEnabled NOT IF TRANSPARENT IS USED 
/>

const People = props =>
    <SafeAreaView style={{ flex: 1, paddingTop: getStatusBarHeight() }}>
        <Toolbar text={props.toolbarText} darkMode={props.darkMode} />
        <PeopleList {...props} />
    </SafeAreaView>

People.propsTypes = {
    sections: PropTypes.arrayOf(PersonTypes),
    toolbarText: PropTypes.string
}

People.defaultProps = {
    toolbarText: 'Expositores'
}

export default withNavigation(withContext(memo(People)))
