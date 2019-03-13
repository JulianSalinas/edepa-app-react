import React from 'react';
import PropTypes from 'prop-types';

import styles from '../constants/Styles';
import icon from '../../assets/images/icon.png';
import pattern from '../../assets/images/pattern.png';
import withAppContext from '../app/Context';

import Divider from '../components/Divider';
import DateCard from '../components/DateCard';
import StatusBar from '../components/StatusBar';
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

};

const HomeLayout = props =>
    <Container>
        <StatusBar/>
        <ScrollView>

            <ImageBackground source={pattern} style={{ flex: 1 }}>
                <Header noShadow style={[classes.marginBottom, {
                    height: 180,
                    backgroundColor: 'transparent'
                }]}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={icon} style={{
                            width: 64,
                            height: 64
                        }}/>
                        <Text style={{
                            textAlign: 'center',
                            color: props.appTheme.greyFont,
                        }}>
                            { props.congress.name }
                        </Text>
                    </View>
                </Header>
            </ImageBackground>

            <Content style={classes.background}>
                <DateCard start={'12/2/2018'} end={'12/2/2018'}/>

                <View style={[classes.card, classes.padded, classes.marginBottom]} transparent>
                    <Body>
                        <Text>
                            { props.congress.description }
                        </Text>
                    </Body>
                </View>
                <View style={[classes.card, classes.marginBottom]} transparent>
                    <Button transparent block iconLeft onPress={props.openDetail}>
                        <Icon style={{color: props.appTheme.primary}} name={'md-map'}/>
                        <Text style={{color: props.appTheme.primary}}>ABRIR EL MAPA</Text>
                    </Button>
                </View>
            </Content>
        </ScrollView>
    </Container>;

HomeLayout.propTypes = {
    congress: PropTypes.object.isRequired,
    openDetail: PropTypes.func.isRequired
};

export default withAppContext(HomeLayout);