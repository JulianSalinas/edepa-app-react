import { Children, Component } from "react";
import DatabaseTypes from "../types/DatabaseTypes"


export default class AppProvider extends Component {

    static childContextTypes = {
        database: DatabaseTypes
    };

    getChildContext() {
        return { database: this.props.database }
    }

    render() {
        return Children.only(this.props.children)
    }

}