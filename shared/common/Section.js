import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/native';
import { Text, View } from 'react-native';

const semitransparent = 'rgba(255, 255, 255, 0.1)';

const StyledView = styled(View)`
    padding: 8px 16px;
    margin-bottom: 8px;
    background-color: ${ props => props.darkMode ? semitransparent : '#EEEEEE'}
`

const SectionText = styled(Text)`
    font-size: 14;
    font-weight: bold;
    color: ${ props => props.darkMode ? '#FFF' : '#000'}
`

const Section = props =>
    <StyledView darkMode={props.darkMode}>
        <SectionText darkMode={props.darkMode}>
            {props.title}
        </SectionText>
    </StyledView>

Section.defaultProps = {
    darkMode: false,
}

Section.propTypes = {
    darkMode: PropTypes.bool,
    title: PropTypes.string.isRequired
}

export default Section;