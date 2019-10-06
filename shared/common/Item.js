import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

import styled from 'styled-components/native';
import { Text, View } from 'react-native';


const StyledItem = styled(View)`
    padding-right: 16px;
    padding-left: 16px;
    padding-bottom: 8px;
`

const StyledRow = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const StyledCol = styled(View)`
    display: flex;
    padding: 8px 12px;
    flex-direction: column;
`

const StyledTitle = styled(Text)`
    font-size: 14;
    font-weight: bold;
`

const StyledSubtitle = styled(Text)`
    font-size: 12;
    font-weight: 300;
`

const ItemCol = ({ title, subtitle, darkMode }) => 
    <StyledCol>
        <StyledTitle style={{ color: darkMode ? '#FFF' : '#000'}}>{title}</StyledTitle>
        <StyledSubtitle style={{ color: darkMode ? '#FFF' : '#000'}}>{subtitle}</StyledSubtitle>
    </StyledCol>

const ItemRow = props => 
    <StyledRow>
        <Avatar size={36} title={props.title}/>
        <ItemCol {...props}/>
    </StyledRow>

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

export default Item;