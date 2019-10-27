// Core 
import React, { PureComponent } from 'react';

// Local 
import Indicator from '../loading/Indicator';
import { withMode } from '../../app/theme/Mode';


class Loading extends PureComponent {

    // Put AuthFlow here 

    render() {
        return <Indicator />
    }

}

export default withMode(Loading);