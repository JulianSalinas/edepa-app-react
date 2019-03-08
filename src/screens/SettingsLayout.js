import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import withAppContext from '../controller/AppContext';


const SettingsLayout = () => <ExpoConfigView />;
export default withAppContext(SettingsLayout);