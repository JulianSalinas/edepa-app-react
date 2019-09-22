import React from 'react';
import { View } from 'native-base';

const Divider = props =>
    <View style={{
        ...props.style,
        height: 1,
        backgroundColor: '#EEEEEE',
    }}/>;

export default Divider;
