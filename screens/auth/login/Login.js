// Core 
import React, { PureComponent } from 'react';

// Local 
import Layout from './Layout';
import { withMode } from '../../../app/theme/Mode';


class Login extends PureComponent {

    login = () => {
        console.log('LOGIN PRESSED');
    }

    render() {
        return <Layout {...this.props} login={this.login} />
    }

}

export default withMode(Login);