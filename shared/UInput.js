// Core 
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// Libs
import styled from 'styled-components/native';
import { View, TextInput } from 'react-native';

// Local 
import { withContext } from '../app/AppContext';


const InputControl = props => 
    <TextInput
        value={props.password}
        placeholder={props.placeholder}
        onChangeText={props.onPasswordChange}
        secureTextEntry={props.secureTextEntry}
        style={{ flex: 1, color: props.palette.primaryFont }}
    />

const StyledInput = styled(View)`
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 48px;
    margin-bottom: 8px;
    border-radius: 24px;
    padding: 0px 24px 0px 24px;
`

const UInputLayout = props =>
    <StyledInput style={{ backgroundColor: props.palette.secondaryItem }}>
        { props.icon ? <props.icon color={props.palette.primaryFont} /> : null }
        <InputControl {...props}/>
    </StyledInput>


class UInput extends PureComponent {

    state = {
        secureTextEntry: true
    }

    onPress = () => this.setState(state => ({ 
        secureTextEntry: !state.secureTextEntry 
    }))
    

    render() {
        return <UInputLayout
            {...this.props}
            onPress={this.onPress}
            secureTextEntry={this.props.isPrivate ? this.state.secureTextEntry : false}
        />
    }

}

UInput.propTypes = {
    icon: PropTypes.func,
    isPrivate: PropTypes.bool,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

UInput.defaultProps = {
    isPrivate: false,
}

export default withContext(UInput);