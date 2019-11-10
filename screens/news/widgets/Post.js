// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { Caption, Title } from 'react-native-paper';
import { View, Text, Image } from 'react-native';

// Local 
import Decoration from '../../schedule/items/Sideway';
import Flat from '../../../colors/Flat';
import Shadow from '../../../shared/Shadow';
import { withContext } from '../../../app/AppContext';
import { getDay, getMonth, getTimeAgo } from '../../../scripts/Time';
import PostSample from '../../../samples/Post';
import { PostTypes } from '../../../app/AppTypes';
import { colorFor } from '../../../scripts/Color';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TimerIcon = props =>
    <MaterialCommunityIcons
        size={14}
        name={'timer-sand-empty'}
        color={props.palette.secondaryFont}
    />

const PostContent = props =>
    <Text style={{ color: props.palette.primaryFont }}>
        {props.post.content}
    </Text>

const PostTitle = props =>
    <Title style={{ color: props.palette.primaryFont }}>
        {props.post.title}
    </Title>

const StyledPostTimeAgo = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

const PostTimeAgo = props =>
    <StyledPostTimeAgo>
        <TimerIcon {...props} />
        <View style={{ margin: 2 }} />
        <Caption style={{ color: props.palette.secondaryFont }}>
            {getTimeAgo(props.post.time)}
        </Caption>
    </StyledPostTimeAgo>

const StyledPostContainer = styled(View)`
    flex: 1;
    padding: 8px 16px 16px 0px;
`

const PostContainer = props =>
    <StyledPostContainer>
        <PostTitle {...props} />
        <PostTimeAgo {...props} />
        <PostContent {...props} />
    </StyledPostContainer>

const StyledPost = styled(View)`
    display: flex;
    min-height: 75;
    flex-direction: row;
    /* background-color: #f12; */
`

const Post = props =>
    <StyledPost style={{ backgroundColor: props.isEven ? 'transparent' : props.palette.secondaryItem }}>
        <Decoration
            isLast={props.isLast}
            active={props.isEven}
            isFirst={props.isFirst}
            color={colorFor(props.post.title, Object.values([Flat.FACEBOOK, Flat.CARROT]))} />
        <PostContainer {...props} />
    </StyledPost>

Post.propsTypes = {
    post: PostTypes,
    isEven: PropTypes.bool,
    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,
}

Post.defaultProps = {
    post: PostSample,
    isEven: false,
    isLast: false
}

export default withContext(memo(Post));