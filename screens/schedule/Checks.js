// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View, Platform, Text, FlatList } from 'react-native';

// Local 
import Theme from '../../app/Theme';
import Events from '../../colors/Events';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { opacityFor } from '../../scripts/Color';
import { useTheme } from 'react-navigation';

// Constants
const LIGHT_TRANSPARENT = 'rgba(0, 0, 0, 0.6)';
const DARK_TRANSPARENT = 'rgba(255, 255, 255, 0.6)';

const ButtonShadow = {
    elevation: 5,
    shadowColor: "#000",
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 }
}

const StyledText = styled(Text)`
    font-size: 10;
    letter-spacing: 2.4;
    text-transform: uppercase;
`

const ButtonDot = props =>
    <Entypo
        size={16}
        name={'dot-single'}
        style={{ marginEnd: 4 }}
        color={
            props.isFocused ? props.darkMode ? '#FFF' : '#000' :
                opacityFor(Theme.fontOpacity, props.darkMode)
        }
    />

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
        {/* <ButtonDot {...props} /> */}
        <ButtonText {...props} />
    </StyledButtonView>

const ButtonStyle = ({ color, isFocused, darkMode }) => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: 48,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderWidth: isFocused ? 2.5 : 0.5,
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
        color={Events[props.type]}
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
        types: Object.entries(Events).map(this.initTypes),
        activeTypes: Object.keys(Events).reduce(this.initActiveTypes, {})
    }

    initTypes(entry) {
        return { type: entry[0], color: entry[1] }
    }

    initActiveTypes(types, current) {
        types[current] = false;
        return types;
    }

    componentWillMount() {
        console.log(this.state.types);
        console.log(this.state.activeTypes);
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
