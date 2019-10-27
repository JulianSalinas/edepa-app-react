// Core 
import React, { PureComponent } from 'react';

// Local 
import Layout from './Layout';


class Login extends PureComponent {

    login = () => {
        console.log('LOGIN PRESSED');
    }

    render() {
        return <Layout login={this.login} />
    }

}

export default Login;