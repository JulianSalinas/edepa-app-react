// Core
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { Text, View } from 'react-native';


const StyledText = styled(Text)`
    font-size: 14;
    font-weight: bold;
`

const SectionText = ({ title, darkMode }) =>
    <StyledText style={{ color: darkMode ? '#FFF' : '#000' }}>
        {title}
    </StyledText>

const StyledView = styled(View)`
    padding: 8px 16px;
`

const SectionColor = props => ({
    backgroundColor: props.darkMode ? '#303C4E' : '#EEE'
})

const Section = props =>
    <StyledView style={[props.style, SectionColor(props)]}>
        <SectionText {...props} />
    </StyledView>


Section.propTypes = {
    darkMode: PropTypes.bool,
    title: PropTypes.string.isRequired,
    style: PropTypes.object
}

Section.defaultProps = {
    darkMode: false,
    style: {},
}

export default memo(Section);