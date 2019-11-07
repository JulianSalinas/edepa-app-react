// Core 
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View, Animated, Text } from 'react-native';
import { Caption } from 'react-native-paper';
import { withMode } from '../../theme/Mode';
import Loading from '../loading/Indicator';
import { opacityFor } from '../../scripts/Color';
import Theme from '../../theme/Theme';
import Logo from '../../shared/Edepa';
import { ScrollView } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const StyledView = styled(ScrollView)`
    flex: 1;
    display: flex;
`

const StyledUpper = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
`

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
            <Text style={{ color: props.darkMode ? '#FFF' : '#000'}}>
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

const Text = props 
const HomeStat = props => 
    <View style={{
        display: 'flex',
        flexDirection: 'column'
    }}>

        <Text style={{ color: props.darkMode ? '#FFF' : '#000'}}>
            {props.amount}
        </Text>

        <Text style={{ color: opacityFor(props.theme.fontOpacity, props.darkMode)}}>
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
        <HomeStat {...props} amount={23} description={'Expositores'}/>
        <HomeStat {...props} amount={123} description={'Eventos'}/>
        <HomeStat {...props} amount={54} description={'Participantes'}/>
    </StyledStats>

const Layout = props =>
    <StyledView 
        style={{ paddingTop: getStatusBarHeight() + 16 }} 
        contentContainerStyle={{ paddingVertical: 16 }}>

        <StyledUpper>
            <Logo darkMode={props.darkMode} />
            <Caption style={{ color: opacityFor(Theme.fontOpacity, props.darkMode)}}>
                Bienvenido
            </Caption>
        </StyledUpper>

        <Animated.ScrollView
            scrollEventThrottle={16}
            style={{ marginTop: 16 }}
        >

            <HomeStats {...props}/>
            <HomeDate {...props}/>
            <Option {...props} text='Información'/>
            <Option {...props} text='Ubicación'/>
            <Option {...props} text='Acerca de'/>
            <Option {...props} text='Salir'/>

        </Animated.ScrollView>

    </StyledView>


class Home extends PureComponent {


    state = {
        event: null,
        isLoading: true
    }

    componentDidMount(){
        this.props.actions.watchHome(event => this.setState({event, isLoading: false }));
    }

    render() {
        console.log('Props in home', this.props);
        return this.state.isLoading ? <Loading /> : <Layout {...this.props} event={this.state.event} />
    }

}


export default withMode(Home, true);