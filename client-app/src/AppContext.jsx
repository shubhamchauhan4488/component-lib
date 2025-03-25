import { lightTheme, darkTheme } from './../../lib//src/theme';
import React from "react";

export const AppThemeContext = React.createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ initialTheme, children }) => {

  const [theme, setTheme] = React.useState(initialTheme || lightTheme);
  
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <AppThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
}