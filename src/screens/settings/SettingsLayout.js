import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import withAppContext from '../../app/Context';


const SettingsLayout = () => <ExpoConfigView />;
export default withAppContext(SettingsLayout);