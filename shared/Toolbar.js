// Core 
import React from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { Platform } from '@unimodules/core';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';


const StyledToolbarText = styled(Text)`
    font-size: 10;
    letter-spacing: 2.4;
    text-transform: uppercase;
`

const ToolbarText = props =>
    <StyledToolbarText style={{ color: props.darkMode ? '#FFF' : '#000' }}>
        {props.text}
    </StyledToolbarText>

const MenuIcon = props =>
    <Entypo
        size={24}
        color={props.darkMode ? '#FFF' : '#000'}
        name={'menu'}
        onPress={props.navigation.openDrawer}
    />

const SearchIcon = props =>
    <Ionicons
        size={24}
        color={props.darkMode ? '#FFF' : '#000'}
        name={`${Platform.OS ? 'ios' : 'md'}-search`}
    />

const StyledToolbar = styled(View)`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 16px 8px 16px;
`

const Toolbar = props =>
    <StyledToolbar>
        <MenuIcon {...props} />
        <ToolbarText {...props} />
        <SearchIcon {...props} />
    </StyledToolbar>

Toolbar.propTypes = {
    text: PropTypes.string,
    darkMode: PropTypes.bool,
}

Toolbar.defaultProps = {
    text: '',
    darkMode: true
}

export default withNavigation(Toolbar); 