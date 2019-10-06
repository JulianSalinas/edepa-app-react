import React from 'react';
import PropTypes from 'prop-types';

import { Constants } from 'expo';
import { View } from 'native-base';
import { Platform } from 'react-native';

const Status = props => Platform.OS === 'android' ?
    <View style={{
        height: Constants.statusBarHeight,
        backgroundColor: props.color || '#FFFFFF',
    }}/> : null;

Status.propsTypes = {
    color: PropTypes.string
};

export default Status;
