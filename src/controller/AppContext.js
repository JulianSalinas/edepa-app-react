import React from "react";
import DatabaseTypes from "../types/DatabaseTypes"


export default Component => {

    const GetContext = (props, context) =>
        <Component { ...props } { ...context } />;

    GetContext.contextTypes = {
        database: DatabaseTypes
    };

    return GetContext;

};