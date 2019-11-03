// Core 
import React, { PureComponent } from 'react';

// Local 
import Layout from './Layout';
import { AppConsumer } from '../../../app/AppContext';


class Login extends PureComponent {

    login = () => {
        console.log('LOGIN PRESSED');
    }

    render() {
        return (
            <AppConsumer>
                {
                    value => {
                        console.log('Props from consumer', value);
                        return <Layout {...this.props} login={this.login} />
                    }
                }
            </AppConsumer>
        )
    }

}

export default Login;