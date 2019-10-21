// Core 
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// Local 
import Layout from './Layout';


class Login extends PureComponent {

    login = () => {
        this.props.print('LOGIN PRESSED')
    }

    render() {
        return <Layout 
            login={this.login} 
            darkMode={this.props.darkMode} 
        />
    }

}

Login.propTypes = {
    darkMode: PropTypes.bool,
    print: PropTypes.func,
}

Login.defaultProps = {
    darkMode: true,
    print: () => console.warn('Required function: print')
}

export default Login;