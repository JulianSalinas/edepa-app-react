// Core 
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { withMode } from '../../app/theme/Mode';
import AppDatabase from '../../services/Firebase';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Loading from '../loading/Indicator';

const StyledView = styled(View)`
    flex: 1;
    display: flex;
    /* align-items: center;
    justify-content: center; */
`

const StyledText = styled(Text)`
    margin-right: 12px;
    font-size: 18px;
    letter-spacing: 2.5;
    text-transform: uppercase;
`

const CardShadow = {
    elevation: 2,
    shadowColor: "#000",
    shadowRadius: 3.14,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 }
}

const Layout = props =>
    <StyledView>
        <View style={{ height: getStatusBarHeight() }} />
        {/* <StyledText style={{ color: props.darkMode ? '#FFF' : '#000' }}>Home</StyledText> */}

        <View style={[{
            marginTop: 4,
            marginHorizontal: 16,
            backgroundColor: '#FFF',
            minHeight: 200,
            borderRadius: 4
        }, CardShadow]}>

            <Text style={{ color: '#F12' }}>
                {props.local.start}
            </Text>

            <Text>
                {props.local.end}
            </Text>

            <Text>
                {props.local.name}
            </Text>

            <Text>
                {props.local.locationTag}
            </Text>

            <Text>
                {props.local.location}
            </Text>

            <Text>
                {props.local.description}
            </Text>

            <Text>
                {props.local.xCoord}
            </Text>

            <Text>
                {props.local.yCoord}
            </Text>

        </View>

    </StyledView>


class Home extends PureComponent {


    state = {
        local: null,
        isLoading: true
    }

    constructor(props) {
        super(props);
        this.database = new AppDatabase();
    }

    componentDidMount() {
        this.database.synchHome(value => this.setState({
            local: value,
            isLoading: false,
        }, () => console.log(value)))
    }

    render() {
        return this.state.isLoading ? <Loading /> : <Layout {...this.props} local={this.state.local} />
    }

}


export default withMode(Home);