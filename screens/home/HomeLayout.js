import React from 'react';
import PropTypes from 'prop-types';

import theme from '../../constants/Theme';
import styles from '../../constants/Styles';

import icon from '../../../assets/images/icon.png';
import pattern from '../../../assets/images/pattern.png';
import withAppContext from '../../app/Context';

import Divider from '../../components/Divider';
import DateCard from '../../components/DateCard';
import StatusBar from '../../components/StatusBar';
import LightButton from "../../components/LightButton";
import { ScrollView, Image, ImageBackground } from 'react-native';

import {
    Col,
    Row,
    Grid,
    Text,
    Icon,
    Card,
    Body,
    View,
    Title,
    Header,
    Badge,
    Button,
    Content,
    CardItem,
    Container, Item, Input,
} from 'native-base';

const classes = {
    ...styles,
    headerBackground: {
        flex: 1,
    },
    headerContent: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerContainer: {
        height: 180,
        backgroundColor: 'transparent'
    },
    headerText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.greyFont,
    },
    headerImagen: {
        width: 64,
        height: 64
    },
    descriptionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    descriptionDecoration: {
        height: 24,
        backgroundColor: theme.decoration
    }
};

const HeaderContainer = ({ children }) =>
    <ImageBackground
        source={pattern}
        style={classes.headerBackground}>
        <Header noShadow style={classes.headerContainer}>
            { children }
        </Header>
    </ImageBackground>;

const HeaderContent = props =>
    <HeaderContainer>
        <View style={classes.headerContent}>
            <Image source={icon} style={classes.headerImagen}/>
            <Text style={classes.headerText}>
                { props.congress.name }
            </Text>
        </View>
    </HeaderContainer>;

const HomeTitle = () =>
    <Grid style={classes.marginBottom}>
        <Col style={{ width: 5 }}>
            <View style={classes.descriptionDecoration}/>
        </Col>
        <Col>
            <Text style={[classes.descriptionTitle, classes.marginSides]}>
                Presentación
            </Text>
        </Col>
    </Grid>;

const HomeDescription = props =>
    <View style={[classes.card, classes.content]} transparent>
        <HomeTitle/>
        <Text>{props.congress.description}</Text>
    </View>;

const HomeContent = props =>
    <Content style={classes.background}>
        <DateCard start={'12/2/2018'} end={'12/2/2018'}/>
        <HomeDescription {...props }/>
        <LightButton text={'ABRIR MAPA'} name={'md-map'} onPress={props.openDetail}/>
    </Content>;

const HomeLayout = props =>
    <Container>
        <StatusBar/>
        <ScrollView>
            <HeaderContent {...props}/>
            <HomeContent {...props}/>
        </ScrollView>
    </Container>;

HomeLayout.propTypes = {
    congress: PropTypes.object.isRequired,
    openDetail: PropTypes.func.isRequired
};

export default withAppContext(HomeLayout);