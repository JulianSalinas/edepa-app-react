// Core 
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View, Text, ActivityIndicator } from 'react-native';

// Local 
import Indicator from '../loading/Indicator';

class Loading extends PureComponent {

    // Put AuthFlow here 

    render() {
        return <Indicator />
    }

}

export default Loading;