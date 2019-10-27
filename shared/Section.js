// Core
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { useTheme } from 'react-navigation';
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

const SectionLayout = props =>
    <StyledView style={[props.style, SectionColor(props)]}>
        <SectionText {...props} />
    </StyledView>

const Section = props => {
    const darkMode = useTheme() === 'dark';
    return <SectionLayout {...props} darkMode={darkMode} />
}

Section.propTypes = {
    style: PropTypes.object,
    title: PropTypes.string.isRequired,
}

Section.defaultProps = {
    style: {}
}

export default memo(Section);