import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';
import { Text, View } from 'react-native';

const semitransparent = 'rgba(255, 255, 255, 0.1)';

const StyledView = styled(View)`
    padding: 8px 16px;
    margin-bottom: 8px;
`

const StyledText = styled(Text)`
    font-size: 14;
    font-weight: bold;
`

const SectionText = ({ title, darkMode }) => 
    <StyledText style={{
        color: darkMode ? '#FFF' : '#000'
    }}>
        {title}
    </StyledText>

const Section = props => 
    <StyledView style={{
        backgroundColor: props.darkMode ? semitransparent : '#EEE'
    }}>
        <SectionText {...props}/>
    </StyledView>

Section.defaultProps = {
    darkMode: false,
}

Section.propTypes = {
    darkMode: PropTypes.bool,
    title: PropTypes.string.isRequired
}

export default Section;