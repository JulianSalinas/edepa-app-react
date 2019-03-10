import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScreenStyles';
import withAppContext from '../controller/AppContext';

import {
    Text,
    Icon,
    Button,
    Content,
    Container,
} from 'native-base';

const HomeLayout = props =>
    <Container>
        <Content style={styles.content}>
            <Text style={styles.gutterBottom}>You come and go!</Text>
            <Button bordered iconLeft onPress={props.openDetail}>
                <Icon name={'jet'}/>
                <Text>Open the stuff man!</Text>
            </Button>
        </Content>
    </Container>;

HomeLayout.propTypes = {
    openDetail: PropTypes.func
};

export default withAppContext(HomeLayout);