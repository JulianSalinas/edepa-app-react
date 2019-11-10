// Core 
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View, Animated, Text, ImageBackground, Image } from 'react-native';
import { Caption, Headline, Title } from 'react-native-paper';
import { withMode } from '../../theme/ThemeMode';
import Loading from '../loading/Indicator';
import { opacityFor } from '../../scripts/Color';
import Theme from '../../theme/LightPalette';
import Logo from '../../shared/Edepa';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Feather, MaterialIcons, Entypo, Ionicons, FontAwesome, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from '@unimodules/core';
import Toolbar from '../../shared/Toolbar';
import Access from './Access';
import Flat from '../../colors/Flat';
import Background from '../../theme/Background';
import { getDay, getMonth } from '../../scripts/Time';

const InformationIcon = ({ size }) =>
    <MaterialCommunityIcons
        size={size + size * 3 / 8}
        name={'information-variant'}
        color={'#FFF'}
    />

const FacebookIcon = ({ size }) =>
    <FontAwesome
        size={size}
        name={'facebook'}
        color={'#FFF'}
    />

const QRScannerIcon = ({ size }) =>
    <Ionicons
        size={size}
        name={'md-qr-scanner'}
        color={'#FFF'}
    />

const MapIcon = ({ size }) =>
    <Feather
        size={size}
        name={'map-pin'}
        color={'#FFF'}
    />

const StyledHeader = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
`

const HomeHeader = props =>
    <StyledHeader>
        <Logo darkMode={props.darkMode} color={props.palette.foreground} />
        <Caption style={{ color: props.palette.secondaryFont }}>
            Bienvenido
        </Caption>
    </StyledHeader>

const ButtonShadow = {
    elevation: 4,
    shadowColor: '#000',
    shadowRadius: 2.05,
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: 2 },
}

const StyledHomeDates = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 16px 0px 16px;
`

const HomeDates = props =>
    <StyledHomeDates>
        <View source={require('../../assets/images/carousel/centro-artes.jpg')} style={{
            ...ButtonShadow,
            width: 248,
            height: 128,
            backgroundColor: Flat.MIDNIGHT_BLUE,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
        }} imageStyle={{
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
        }}>
            <View style={{
                flex: 1,
                position: 'relative',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                // backgroundColor: 'rgba(0, 0, 0, 0.3)'
            }}>

                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0
                }}>
                    <Image source={require('../../assets/images/teacher.jpg')} style={{
                        width: 110,
                        height: 110
                    }} />
                </View>

                <View style={{
                    position: 'absolute',
                    bottom: 8,
                    left: 16
                }}>
                    <Caption style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                        {'Primer día'}
                    </Caption>
                    <Text style={{ color: '#FFF', fontSize: 24, fontWeight: 'bold' }}>
                        {`${getDay(props.event.start)} ${getMonth(props.event.start)}`}
                    </Text>
                </View>

            </View>
        </View>
    </StyledHomeDates>


const StyledHomeAccess = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0px 16px 16px 16px;
`

// Each Access measure is 56, so the total space is 248 
const HomeAccess = props =>
    <StyledHomeAccess>
        <Access icon={FacebookIcon} color={'#3B5998'} navigate={() => console.log('Navigating to facebook')} />
        <View style={{ width: 8 }} />
        <Access icon={InformationIcon} color={Flat.CARROT} navigate={() => console.log('Navigating to information')} />
        <View style={{ width: 8 }} />
        <Access icon={QRScannerIcon} color={Flat.PUMPKIN} navigate={() => console.log('Open QR Code Scanner')} />
        <View style={{ width: 8 }} />
        <Access icon={MapIcon} color={Flat.POMEGRANATE} navigate={() => console.log('Open QR Code Scanner')} />
    </StyledHomeAccess>

const StyledScrollView = styled(ScrollView)`
    flex: 1;
    display: flex;
`

const HomeLayout = props =>
    <View style={{ flex: 1, paddingTop: getStatusBarHeight() }}>
        <Toolbar text={'Inicio'} darkMode={props.darkMode} />
        <StyledScrollView contentContainerStyle={{ paddingVertical: 16 }}>
            <HomeHeader {...props} />
            <View style={{ height: 16 }} />
            <HomeDates {...props} />
            <View style={{ height: 8 }} />
            <HomeAccess {...props} />
        </StyledScrollView>
    </View>


class Home extends PureComponent {

    state = {
        event: null,
        isLoading: true
    }

    componentDidMount() {
        this.props.actions.watchHome(event => this.setState({ event, isLoading: false }));
    }

    render() {
        return this.state.isLoading ? <Loading /> : <HomeLayout {...this.props} event={this.state.event} />
    }

}


export default withMode(Home, true);