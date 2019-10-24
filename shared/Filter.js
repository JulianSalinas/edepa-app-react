// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Libs 
import styled from 'styled-components/native';
import { View, Platform, Text } from 'react-native';

// Local 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


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

const ButtonText = props =>
    <StyledText style={{ color: props.isFocused ? '#000' : '#FFF' }}>
        {props.text}
    </StyledText>

const ButtonStyle = ({ isFocused }) => ({
    minWidth: 96,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 48,
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: isFocused ? '#FFF' : '#FFFFFF00',
})

const TouchableButton = props =>
    <TouchableWithoutFeedback
        onPressOut={props.onPress}
        style={[ButtonStyle(props), props.isFocused ? ButtonShadow : {}]}>
        <ButtonText {...props} />
    </TouchableWithoutFeedback>

const ClickableButton = props =>
    <View
        onClick={props.onPress}
        style={[ButtonStyle(props), props.isFocused ? ButtonShadow : {}]}>
        <ButtonText {...props} />
    </View>

const FilterButton = props => Platform.OS === 'web' ?
    <ClickableButton {...props} /> :
    <TouchableButton {...props} />

const FilterItems = props => props.options.map((filter, index) =>
    <FilterButton
        key={filter}
        text={filter}
        isFocused={index === props.active}
        onPress={() => props.onActiveChanged(index)} />
)

const StyledFilter = styled(View)`
    display: flex;
    flex-direction: row;
    border-radius: 48;
`

const FilterLayout = props =>
    <StyledFilter>
        <FilterItems {...props} />
    </StyledFilter>

class Filter extends PureComponent {

    state = {
        active: this.props.active
    }

    onActiveChanged = active => {
        this.setState({ active })
        this.props.onActiveChanged(active);
    }

    render() {
        return <FilterLayout
            {...this.props}
            active={this.state.active}
            onActiveChanged={this.onActiveChanged} />
    }

}

Filter.propTypes = {
    active: PropTypes.number,
    onActiveChanged: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Filter.defaultProps = {
    active: 0
}

export default Filter;
