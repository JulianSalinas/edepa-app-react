// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View } from 'react-native';

// Local 
import Logo from '../../shared/unique/Edepa';
import Google from '../../shared/buttons/Google';
import Facebook from '../../shared/buttons/Facebook';


const StyledLogin = styled(View)`
    flex: 1;
    display: flex;
    alignItems: center;
    justifyContent: center;
`

const Layout = props =>
    <StyledLogin>
        <Logo color={props.darkMode ? '#FFF' : null} />
        <Google {...props} onClick={props.login} style={{ margin: 16 }}/>
        <Facebook {...props} onClick={props.login} />
    </StyledLogin>

Layout.propTypes = {
    darkMode: PropTypes.bool,
    login: PropTypes.func.isRequired
}

Layout.defaultProps = {
    darkMode: true,
    login: () => console.warn('Required function: login')
}

export default memo(Layout);