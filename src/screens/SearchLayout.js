import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScreenStyles';
import withAppContext from '../controller/AppContext';

import {Container, Content, Button, View, Text, Header, Item, Icon, Input, Body } from 'native-base';


class EventLayout extends React.Component {
    render() {
        return (
            <Container>
                <Content style={styles.content}>

                </Content>
            </Container>
        );
    }
}

EventLayout.propTypes = {
    results: PropTypes.array.isRequired,
    handleResults: PropTypes.func.isRequired
};

export default withAppContext(EventLayout);