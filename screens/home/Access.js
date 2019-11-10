// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { withContext } from '../../app/AppContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Platform } from '@unimodules/core';

const ButtonShadow = {
    elevation: 4,
    shadowColor: '#000',
    shadowRadius: 2.05,
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: 2 },
}

const AccessStyle = props => ({
    ...ButtonShadow,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    width: props.size,
    height: props.size,
    borderRadius: props.shape === 'rounded' ? 4 : props.size * (props.shape === 'circle' ? 0.5 : 0.0),
    backgroundColor: props.color
})

const ClickableAccess = props =>
    <View onClick={props.navigate} style={[props.style, AccessStyle(props)]}>
        <props.icon size={props.size / 2} />
    </View>

const TouchableAccess = props =>
    <TouchableOpacity onPress={props.navigate} style={[props.style, AccessStyle(props)]}>
        <props.icon size={props.size / 2} />
    </TouchableOpacity>

const Access = props => Platform.OS === 'web' ?
    <ClickableAccess {...props} /> :
    <TouchableAccess {...props} />

Access.propTypes = {
    size: PropTypes.number,
    style: PropTypes.object,
    color: PropTypes.string,
    shape: PropTypes.oneOf(['square', 'circle', 'rounded']),

}

Access.defaultProps = {
    size: 56,
    style: {},
    color: '#F12',
    shape: 'square'
}

export default withNavigation(withContext(Access));