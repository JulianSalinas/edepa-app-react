// Core 
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View } from 'react-native';
import { Text, Title, Caption } from 'react-native-paper';
import { withMode } from '../../theme/Mode';
import Loading from '../loading/Indicator';
import { opacityFor } from '../../scripts/Color';
import Theme from '../../theme/Theme';
import Logo from '../../shared/Edepa';
import { ScrollView } from 'react-native-gesture-handler';

const StyledView = styled(ScrollView)`
    flex: 1;
    display: flex;
`

const StyledUpper = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledContent = styled(View)`
    display: flex;
`

const Layout = props =>
    <StyledView style={{}} contentContainerStyle={{ padding: 16 }}>

        <StyledUpper>
            <Logo darkMode={props.darkMode} />
        </StyledUpper>

        <StyledContent>
            <Caption style={{
                color: opacityFor(Theme.fontOpacity, props.darkMode)
            }}>
                Bienvenido
            </Caption>
            <Title style={{ color: props.darkMode ? '#FFF' : '#000' }}>
                {props.event.name}
            </Title>
        </StyledContent>

        <Text style={{ color: '#F12' }}>
            {props.event.start}
        </Text>

        <Text>
            {props.event.end}
        </Text>

        <Text>
            {props.event.locationTag}
        </Text>

        <Text>
            {props.event.location}
        </Text>

        <Text>
            {props.event.description}
        </Text>

        <Text>
            {props.event.xCoord}
        </Text>

        <Text>
            {props.event.yCoord}
        </Text>

    </StyledView>


class Home extends PureComponent {


    state = {
        event: null,
        isLoading: true
    }

    render() {
        console.log('Props in home', this.props);
        return this.state.isLoading ? <Loading /> : <Layout {...this.props} event={this.state.event} />
    }

}


export default withMode(Home, true);