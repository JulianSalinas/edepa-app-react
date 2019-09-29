import { Store, Custom, Engine } from './Types';
import React, { Children, Component } from 'react';

/**
 * Variable types used in the whole application 
 */
const contextTypes = {
    store: Store,
    custom: Custom,
    engine: Engine
}

/**
 * Makes a component able to use the global
 * variables such as the store, theme and core functions 
 * @param {Component} WrappedComponent
 */
const withContext = WrappedComponent => {

    const GetContext = (props, context) =>
        <WrappedComponent {...props} {...context} />;

    GetContext.contextTypes = contextTypes;

    return GetContext;
}

/**
 * Wraps the global information to let it be used 
 * in other components 
 */
class Context extends Component {

    static childContextTypes = contextTypes;

    getChildContext() {
        return {
            store: this.props.store,
            custom: this.props.custom,
            engine: this.props.engine
        }
    }

    render() {
        const child = this.props.children ? this.props.children : <div/>;
        return Children.only(child);
    }

}

export { Context, withContext, contextTypes };