// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View, Platform, Text, FlatList } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// Local 
import Theme from '../../app/theme/Theme';
import Colors from '../../colors/Events';
import { opacityFor } from '../../scripts/Color';
import { useTheme } from 'react-navigation';


const StyledText = styled(Text)`
    font-size: 10;
    letter-spacing: 2.4;
    text-transform: uppercase;
`

const ButtonText = props =>
    <StyledText style={{
        color: props.isFocused ? props.darkMode ? '#FFF' : '#000' :
            opacityFor(Theme.fontOpacity, props.darkMode)
    }}>
        {props.text}
    </StyledText>

const StyledButtonView = styled(View)`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
`

const ButtonView = props =>
    <StyledButtonView>
        <ButtonText {...props} />
    </StyledButtonView>

const ButtonStyle = ({ color, isFocused, darkMode }) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: 48,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: isFocused ? color : opacityFor(Theme.fontOpacity, darkMode),
})

const TouchableButton = props =>
    <TouchableWithoutFeedback
        onPress={props.onPress}
        style={[ButtonStyle(props)]}>
        <ButtonView {...props} />
    </TouchableWithoutFeedback>

const ClickableButton = props =>
    <View
        onClick={props.onPress}
        style={[ButtonStyle(props)]}>
        <ButtonView {...props} />
    </View>

const CheckButton = props => {
    const darkMode = useTheme() === 'dark';
    return Platform.OS === 'web' ?
        <ClickableButton {...props} darkMode={darkMode} /> :
        <TouchableButton {...props} darkMode={darkMode} />
}

const CheckItem = props =>
    <CheckButton
        key={props.type}
        text={props.type}
        color={Colors[props.type][props.darkMode ? 'dark' : 'light']}
        isFocused={props.activeTypes[props.type]}
        onPress={() => props.toogleActiveType(props.type)} />

const StyledSeparator = styled(View)`
    margin: 4px;
`

const ChecksScrollStyle = {
    paddingTop: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center'
}

const ChecksScroll = props =>
    <FlatList horizontal
        data={props.types}
        keyExtractor={item => item.type}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={ChecksScrollStyle}
        renderItem={({ item }) => <CheckItem {...props} type={item.type} />}
        ItemSeparatorComponent={() => <StyledSeparator />}
    />

class Checks extends PureComponent {

    state = {

        types: Object.entries(Colors).map(entry => {
            const color = entry[1][this.props.darkMode ? 'dark' : 'light'];
            return { type: entry[0], color }
        }),

        activeTypes: Object.keys(Colors).reduce(this.initActiveTypes, {})
    }

    componentDidMount() {
        console.log(this.state.types)
    }


    initActiveTypes(types, current) {
        types[current] = false;
        return types;
    }

    toogleActiveType = type => this.setState(state => {
        const isActive = state.activeTypes[type];
        return { activeTypes: { ...state.activeTypes, [type]: !isActive } }
    });

    render() {
        return <ChecksScroll
            {...this.props}
            types={this.state.types}
            activeTypes={this.state.activeTypes}
            toogleActiveType={this.toogleActiveType}
        />
    }

}

export default Checks;
