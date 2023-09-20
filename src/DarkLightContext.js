import React from 'react'

export const DarkLightModeContext = React.createContext()

export const DarkLightModeContextProvider = ({ children }) => {
    const [websiteTheme, setWebsiteTheme] = React.useState("Dark")

    return (
        <DarkLightModeContext.Provider value={{websiteTheme, setWebsiteTheme}}>
            {children}
        </DarkLightModeContext.Provider>
    );

}