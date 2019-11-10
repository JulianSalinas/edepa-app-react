// Core 
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View, Animated, Text } from 'react-native';
import { Caption } from 'react-native-paper';
import { withMode } from '../../theme/ThemeMode';
import Loading from '../loading/Indicator';
import { opacityFor } from '../../scripts/Color';
import Theme from '../../theme/LightPalette';
import Logo from '../../shared/Edepa';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Feather, MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { Platform } from '@unimodules/core';
import Toolbar from '../../shared/Toolbar';

const Option = props =>
    <View style={{
        paddingVertical: 8,
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: opacityFor(props.theme.itemOpacity, props.darkMode, true)
    }}>
        <Feather
            name={'info'}
            size={16}
            color={props.darkMode ? '#FFF' : '#000'}
        />
        <View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingHorizontal: 16
        }}>
            <Text style={{ color: props.darkMode ? '#FFF' : '#000' }}>
                {props.text}
            </Text>
        </View>

        <MaterialIcons
            name={'navigate-next'}
            size={16}
            color={props.darkMode ? '#FFF' : '#000'}
        />
    </View>

const HomeDate = props =>
    <View>


    </View>

const HomeStat = props =>
    <View style={{
        display: 'flex',
        flexDirection: 'column'
    }}>

        <Text style={{ color: props.darkMode ? '#FFF' : '#000' }}>
            {props.amount}
        </Text>

        <Text style={{ color: opacityFor(props.theme.fontOpacity, props.darkMode) }}>
            {props.description}
        </Text>

    </View>

const StyledStats = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const HomeStats = props =>
    <StyledStats>
        <HomeStat {...props} amount={23} description={'Expositores'} />
        <HomeStat {...props} amount={123} description={'Eventos'} />
        <HomeStat {...props} amount={54} description={'Participantes'} />
    </StyledStats>

const StyledUpperText = styled(Animated.Text)`
    color: #FFF;
    font-size: 10;
    letter-spacing: 2.4;
    text-transform: uppercase;
`

const UpperText = props =>
    <StyledUpperText style={TextStyle(props)}>
        {getWeekDay(props.datetime)}
    </StyledUpperText>

const StyledUpper = styled(View)`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 16px 8px 16px;
`

const UpperView = props =>
    <StyledUpper>
        <Entypo
            size={24}
            color={'#FFF'}
            name={'menu'}
            onPress={props.navigation.openDrawer}
        />
        <UpperText {...props} />
        <Ionicons
            size={24}
            color={'#FFF'}
            name={`${Platform ? 'ios' : 'md'}-search`}
        />
    </StyledUpper>

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

const StyledScrollView = styled(ScrollView)`
    flex: 1;
    display: flex;
`

const HomeLayout = props =>
    <View style={{ flex: 1, paddingTop: getStatusBarHeight() }}>
        <Toolbar text={'Inicio'} darkMode={props.darkMode} />
        <StyledScrollView contentContainerStyle={{ paddingVertical: 16 }}>
            <HomeHeader {...props} />
            {/* <Animated.ScrollView
                scrollEventThrottle={16}
                style={{ marginTop: 16 }}
            >

                <HomeStats {...props} />
                <HomeDate {...props} />
                <Option {...props} text='Información' />
                <Option {...props} text='Ubicación' />
                <Option {...props} text='Acerca de' />
                <Option {...props} text='Salir' />

            </Animated.ScrollView> */}

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