// Core 
import React, { memo } from 'react';

// Libs 
import styled from 'styled-components/native';
import { View, Text } from 'react-native';

//Local 
import Avatar from '../shared/Avatar';
import { withContext } from './AppContext';


const DrawerAvatar = props =>
    <Avatar
        size={48}
        title={props.user ? props.user.username : ''}
        source={require('../assets/images/robot-prod.png')}
    />

const DrawerUsername = props =>
    <Text style={{ color: props.palette.primaryFont, fontWeight: 'bold' }} numberOfLines={1}>
        {props.user ? props.user.username : ''}
    </Text>

const DrawerEmail = props =>
    <Text style={{ color: props.palette.primaryFont, fontSize: 12 }} numberOfLines={1}>
        {props.user ? props.user.email : ''}
    </Text>

const DrawerUser = props =>
    <View>
        <DrawerUsername {...props} />
        <DrawerEmail {...props} />
    </View>

const StyledHeader = styled(View)`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    padding: 64px 32px 16px 32px; 
`

const DrawerHeader = props =>
    <StyledHeader>
        <DrawerAvatar {...props} />
        <View style={{ margin: 8 }} />
        <DrawerUser {...props} />
    </StyledHeader>


export default withContext(memo(DrawerHeader));