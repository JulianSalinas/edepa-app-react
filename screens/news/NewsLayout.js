import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import withAppContext from '../../app/Context';


const NewsLayout = () => <ExpoConfigView />;
export default withAppContext(NewsLayout);