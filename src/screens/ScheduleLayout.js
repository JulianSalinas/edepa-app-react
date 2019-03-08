import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import withAppContext from '../controller/AppContext';


const ScheduleLayout = () => <ExpoConfigView />;
export default withAppContext(ScheduleLayout);