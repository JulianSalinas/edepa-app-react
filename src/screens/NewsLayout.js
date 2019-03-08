import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import withAppContext from '../controller/AppContext';


const NewsLayout = () => <ExpoConfigView />;
export default withAppContext(NewsLayout);