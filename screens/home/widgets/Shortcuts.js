// Core 
import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import styled from 'styled-components/native';
import { View } from 'react-native';
import { Feather, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

// Local
import Access from '../../../shared/Access';
import Flat from '../../../colors/Flat';
import { withContext } from '../../../app/AppContext';


const FacebookIcon = ({ size }) =>
    <FontAwesome
        size={size}
        name={'facebook'}
        color={'#FFF'}
    />

const InformationIcon = ({ size }) =>
    <MaterialCommunityIcons
        size={size + size * 3 / 8}
        name={'information-variant'}
        color={'#FFF'}
    />

const ScannerIcon = ({ size }) =>
    <Ionicons
        size={size}
        name={'md-qr-scanner'}
        color={'#FFF'}
    />

const LocationIcon = ({ size }) =>
    <Feather
        size={size}
        name={'map-pin'}
        color={'#FFF'}
    />

const StyledShortcuts = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0px 16px 16px 16px;
`

// Each Access measure is 56, so the total space is 248 
const Shortcuts = props =>
    <StyledShortcuts>
        <Access icon={FacebookIcon} color={Flat.FACEBOOK} navigate={props.navigateToFacebook} />
        <View style={{ width: 8 }} />
        <Access icon={InformationIcon} color={Flat.CARROT} navigate={props.navigateToInformation} />
        <View style={{ width: 8 }} />
        <Access icon={ScannerIcon} color={Flat.PUMPKIN} navigate={props.navigateToScanner} />
        <View style={{ width: 8 }} />
        <Access icon={LocationIcon} color={Flat.POMEGRANATE} navigate={props.navigateToLocation} />
    </StyledShortcuts>

Shortcuts.propTypes = {
    navigateToFacebook: PropTypes.func,
    navigateToInformation: PropTypes.func,
    navigateToScanner: PropTypes.func,
    navigateToLocation: PropTypes.func
}

Shortcuts.defaultProps = {
    navigateToFacebook: () => console.log('Navigating to Facebook'),
    navigateToInformation: () => console.log('Navigating to Information'),
    navigateToScanner: () => console.log('Opening QR Code Scanner'),
    navigateToLocation: () => console.log('Opening Map Location')
}

export default withNavigation(withContext(memo(Shortcuts)));