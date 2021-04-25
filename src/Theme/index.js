import { useState, createContext, useContext } from 'react';
import { ThemeProvider } from "styled-components";

import Colors from "./Colors";
import Font from "./Fonts";
import Metrics from "./Metrics";

const theme = {
    Colors,
    Font,
    Metrics,
};

// initializing context
export const ThemeContext = createContext(theme);

// setting a helper function to use context
export const useThemeContext = () => useContext(ThemeContext);

export function ThemeContextProvider({ children }) {
    const [themeObj, setTheme] = useState(theme);
    return (
        <ThemeContext.Provider value={{ themeObj, setTheme }}>
            <ThemeProvider theme={themeObj}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}