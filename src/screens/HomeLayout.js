import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import withAppContext from '../controller/AppContext';


const HomeLayout = () => <ExpoConfigView />;
export default withAppContext(HomeLayout);