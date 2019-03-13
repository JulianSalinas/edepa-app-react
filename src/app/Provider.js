import { Children, Component } from 'react';
import ThemeTypes from '../types/Theme';
import DatabaseTypes from '../types/Database';


export default class Provider extends Component {

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