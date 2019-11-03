// Core 
import React, { createContext } from 'react';

/**
 * ? Every component that is needed to access the data should be wrapped 
 * Used to access the information provided at the top of the app 
 */
const AppContext = createContext();

export const withContext = Component => props =>
    <AppContext.Consumer>
        {({ theme, darkMode, changeDarkMode, ...state }) => {
            return <Component {...props}
                database={state}
                darkMode={darkMode}
                theme={{ ...theme, darkMode, changeDarkMode }}
            />
        }}
    </AppContext.Consumer>

export default AppContext;

