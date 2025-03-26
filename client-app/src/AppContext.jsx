import { lightTheme, darkTheme } from "@shubham_chauhan/component-lib";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.typography.fontFamilies.base};
    font-size: ${({ theme }) => theme.typography.fontSizes.md};
    line-height: ${({ theme }) => theme.typography.lineHeights.md};
    margin: 0;
    padding: 0;
    transition: all ${({ theme }) => theme.animation?.duration?.medium || "0.3s"} ${({ theme }) => theme.animation?.easing?.easeInOut || "ease-in-out"};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-top: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  button, input, select, textarea {
    font-family: inherit;
  }
  
  code {
    font-family: ${({ theme }) => theme.typography.fontFamilies.monospace};
    background-color: ${({ theme }) => theme.colors.surfaceHighlight};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borders.radius.sm};
  }
`;

export const AppThemeContext = React.createContext({
  theme: lightTheme,
  themeName: "light",
  toggleTheme: () => { }
});

export const AppThemeProvider = ({ initialTheme, children }) => {
  const [themeName, setThemeName] = React.useState(initialTheme === "dark" ? "dark" : "light");
  const theme = themeName === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  return (
    <AppThemeContext.Provider value={{ themeName, theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};