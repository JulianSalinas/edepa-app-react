// Core
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

//Local 
import Avatar from './Avatar';


const StyledItem = styled(View)`
    paddingRight: 16px;
    paddingLeft: 16px;
    paddingBottom: 8px;
`

const StyledRow = styled(View)`
    display: flex;
    flexDirection: row;
    justifyContent: flex-start;
    alignItems: center;
`

const StyledCol = styled(View)`
    display: flex;
    padding: 8px 12px;
    flexDirection: column;
`

const StyledTitle = styled(Text)`
    fontSize: 14;
    fontWeight: bold;
`

const StyledSubtitle = styled(Text)`
    fontSize: 12;
    fontWeight: 300;
`

const ItemTitle = ({ title, darkMode }) => 
    <StyledTitle style={{ color: darkMode ? '#FFF' : '#000'}}>
        {title}
    </StyledTitle>

const ItemSubtitle = ({ subtitle, darkMode }) => 
    <StyledSubtitle style={{ color: darkMode ? '#FFF' : '#000'}}>
        {subtitle}
    </StyledSubtitle>

const ItemCol = props => 
    <StyledCol>
        <ItemTitle {...props}/>
        <ItemSubtitle {...props}/>
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

export default memo(Item);