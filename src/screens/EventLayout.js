import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScreenStyles';
import withAppContext from '../controller/AppContext';

import {Container, Content, Button, View, Text} from "native-base";


const EventLayout = props =>
    <Container>
        <Content style={styles.content}>
            <Text style={styles.gutterBottom}>
                {props.message}
            </Text>
            <Button bordered onPress={props.closeDetail}>
                <Text> Fuck go back! </Text>
            </Button>
        </Content>
    </Container>;

EventLayout.propTypes = {
    message: PropTypes.string.isRequired,
    closeDetail: PropTypes.func.isRequired
};

export default withAppContext(EventLayout);