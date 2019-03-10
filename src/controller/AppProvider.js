import { Children, Component } from 'react';
import ThemeTypes from '../types/ThemeTypes';
import DatabaseTypes from '../types/DatabaseTypes';


export default class AppProvider extends Component {

    static childContextTypes = {
        appTheme: ThemeTypes,
        database: DatabaseTypes
    };

    static propTypes = {
        appTheme: ThemeTypes,
        database: DatabaseTypes
    };

    getChildContext() {
        return {
            appTheme: this.props.appTheme,
            database: this.props.database
        }
    }

    render() {
        return Children.only(this.props.children)
    }

}