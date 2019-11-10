// Core 
import PropTypes from 'prop-types';
import React, { memo } from 'react';

// Libs 
import { SafeAreaView, FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// Local 
import Post from './widgets/Post';
import Toolbar from '../../shared/Toolbar';
import { PostTypes } from '../../app/AppTypes';
import { withContext } from '../../app/AppContext';


const PostList = props =>
    <FlatList
        data={props.posts}
        keyExtractor={item => item.key}
        renderItem={({ item, index }) =>
            <Post
                post={item}
                isEven={index % 2 === 0}
                isFirst={index === 0}
                isLast={index === props.posts.length - 1}
            />
        }
    />

const News = props =>
    <SafeAreaView style={{ flex: 1, paddingTop: getStatusBarHeight() }}>
        <Toolbar text={props.toolbarText} darkMode={props.darkMode} />
        <PostList {...props} />
    </SafeAreaView>

News.propTypes = {
    posts: PropTypes.arrayOf(PostTypes).isRequired,
    toolbarText: PropTypes.string
}

News.defaultProps = {
    toolbarText: 'Noticias'
}

export default withContext(memo(News));