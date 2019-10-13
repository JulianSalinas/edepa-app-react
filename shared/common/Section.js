// Core
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

// Constants
const SEMI_TRANSPARENT = 'rgba(255, 255, 255, 0.1)';

const StyledView = styled(View)`
    padding: 8px 16px;
`

const StyledText = styled(Text)`
    fontSize: 14;
    fontWeight: bold;
`

const SectionText = ({ title, darkMode }) =>
    <StyledText style={{
        color: darkMode ? '#FFF' : '#000'
    }}>
        {title}
    </StyledText>

const Section = props =>
    <StyledView style={[props.style, {
        backgroundColor: props.darkMode ? SEMI_TRANSPARENT : '#EEE'
    }]}>
        <SectionText {...props} />
    </StyledView>

Section.defaultProps = {
    darkMode: false,
    style: {},
}

Section.propTypes = {
    darkMode: PropTypes.bool,
    title: PropTypes.string.isRequired,
    style: PropTypes.object
}

export default memo(Section);