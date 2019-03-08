import React from 'react';
import AppNavigator from './AppNavigator';
import { ThemeProvider } from 'react-native-elements';

export default class AppThemed extends React.Component {

    theme = {
        colors: {
            primary: '#3F51B5',
            secondary: '#212121'
        }
    };

    render() {
        return (
            <ThemeProvider theme={this.theme}>
                <AppNavigator/>
            </ThemeProvider>
        );
    }

}
