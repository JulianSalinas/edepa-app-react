import React from 'react';
import ThemeTypes from '../types/Theme';
import DatabaseTypes from '../types/Database';


export default Component => {

    const GetContext = (props, context) =>
        <Component { ...props } { ...context } />;

    GetContext.contextTypes = {
        appTheme: ThemeTypes,
        database: DatabaseTypes
    };

    return GetContext;

};