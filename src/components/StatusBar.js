import React from 'react';
import PropTypes from 'prop-types';

import { Constants } from 'expo';
import { View } from 'native-base';
import { Platform } from 'react-native';

const StatusBar = props => Platform.OS === 'android' ?
    <View style={{
        height: Constants.statusBarHeight,
        backgroundColor: props.color || '#FFFFFF',
    }}/> : null;

StatusBar.propsTypes = {
    color: PropTypes.string
};

export default StatusBar;
