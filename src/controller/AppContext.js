import React from 'react';
import ThemeTypes from '../types/ThemeTypes';
import DatabaseTypes from '../types/DatabaseTypes';


export default Component => {

    const GetContext = (props, context) =>
        <Component { ...props } { ...context } />;

    GetContext.contextTypes = {
        appTheme: ThemeTypes,
        database: DatabaseTypes
    };

    return GetContext;

};