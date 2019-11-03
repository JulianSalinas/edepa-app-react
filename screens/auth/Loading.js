// Core 
import React, { PureComponent } from 'react';

// Local 
import Indicator from '../loading/Indicator';
import { withMode } from '../../theme/Mode';


class Loading extends PureComponent {

    render() {
        return <Indicator />
    }

}

export default withMode(Loading, true);