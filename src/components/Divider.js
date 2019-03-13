import React from 'react';
import { View } from 'native-base';

const Divider = props =>
    <View style={{
        ...props.style,
        height: 2,
        backgroundColor: '#EEEEEE',
    }}/>;

export default Divider;
