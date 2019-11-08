// Core 
import React, { createContext } from 'react';

/**
 * ? Every component that is needed to access the data should be wrapped 
 * Used to access the information provided at the top of the app 
 */
const AppContext = createContext();

export const withContext = Component => props =>
    <AppContext.Consumer>
        {({ palette, darkMode, actions }) =>
            <Component {...props}
                actions={actions}
                darkMode={darkMode}
                palette={{ ...palette, darkMode }}
            />
        }
    </AppContext.Consumer>

export default AppContext;

