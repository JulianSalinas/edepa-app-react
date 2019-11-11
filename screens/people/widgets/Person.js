// Core
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

//Local 
import Avatar from '../../../shared/Avatar';


const StyledTitle = styled(Text)`
    font-size: 14;
    font-weight: bold;
`

const ItemTitle = ({ title, darkMode }) => 
    <StyledTitle style={{ color: darkMode ? '#FFF' : '#000'}}>
        {title}
    </StyledTitle>

const StyledSubtitle = styled(Text)`
    font-size: 12;
    font-weight: 300;
`

const ItemSubtitle = ({ subtitle, darkMode }) => 
    <StyledSubtitle style={{ color: darkMode ? '#FFF' : '#000'}}>
        {subtitle}
    </StyledSubtitle>

const StyledCol = styled(View)`
    display: flex;
    padding: 8px 12px;
    flex-direction: column;
`

const ItemCol = props => 
    <StyledCol>
        <ItemTitle {...props}/>
        <ItemSubtitle {...props}/>
    </StyledCol>

const StyledRow = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const ItemRow = props => 
    <StyledRow>
        <Avatar size={36} title={props.title}/>
        <ItemCol {...props}/>
    </StyledRow>

const StyledItem = styled(View)`
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 8px;
`

const Item = props =>
    <StyledItem>
        <ItemRow {...props}/>
    </StyledItem>

Item.propTypes = {
    darkMode: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string
}

Item.defaultProps = {
    darkMode: true,
    title: 'Julian Salinas',
    subtitle: 'Software Engineer'
}

export default memo(Item);