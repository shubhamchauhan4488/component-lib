import { brandingColors } from './colors/colors';
import typography from './typography';

// Design tokens
export interface ThemeTokens {
  // Colors
  colors: {
    // Primary palette
    primary: string;
    primaryLight: string;
    primaryDark: string;
    
    // Secondary palette
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    
    // Neutrals
    background: string;
    backgroundSecondary: string;
    surface: string;
    surfaceHighlight: string;
    
    // Text
    textPrimary: string;
    textSecondary: string;
    textDisabled: string;
    textInverse: string;
    
    // Borders
    border: string;
    borderLight: string;
    borderFocus: string;
  };
  
  // Spacing
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  
  // Typography
  typography: {
    fontFamilies: {
      base: string;
      heading: string;
      monospace: string;
    };
    fontWeights: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    lineHeights: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  };
  
  // Borders and radius
  borders: {
    radius: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
    width: {
      thin: string;
      thick: string;
    };
    style: {
      solid: string;
      dashed: string;
    };
  };
}

export const lightTheme: ThemeTokens = {
  colors: {
    primary: brandingColors.dark_1_green,
    primaryLight: brandingColors.light_2_green,
    primaryDark: brandingColors.dark_2_green,
    
    secondary: brandingColors.coral,
    secondaryLight: brandingColors.light_1_coral,
    secondaryDark: brandingColors.coral,
    
    background: brandingColors.white,
    backgroundSecondary: brandingColors.light_1_grey,
    surface: brandingColors.light_grey,
    surfaceHighlight: brandingColors.accent_grey,
    
    textPrimary: brandingColors.light_1_dark_navy,
    textSecondary: brandingColors.dark_2_green,
    textDisabled: brandingColors.light_2_grey,
    textInverse: brandingColors.white,
    
    border: brandingColors.accent_grey,
    borderLight: brandingColors.light_grey,
    borderFocus: brandingColors.dark_2_green,
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  typography: {
    fontFamilies: {
      base: typography.fontFamilySans,
      heading: typography.fontFamilySansDemibold,
      monospace: '"Roboto Mono", monospace',
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    fontSizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '20px',
      xl: '24px',
      xxl: '32px',
    },
    lineHeights: {
      xs: 1.2,
      sm: 1.4,
      md: 1.5,
      lg: 1.8,
    },
  },
  borders: {
    radius: {
      none: '0',
      sm: '2px',
      md: '4px',
      lg: '8px',
      full: '9999px',
    },
    width: {
      thin: '1px',
      thick: '2px',
    },
    style: {
      solid: 'solid',
      dashed: 'dashed',
    },
  },
};

export const darkTheme: ThemeTokens = {
  colors: {
    primary: brandingColors.light_2_green,
    primaryLight: brandingColors.light_2_green,
    primaryDark: brandingColors.dark_2_green,
    
    secondary: brandingColors.light_1_coral,
    secondaryLight: brandingColors.light_1_coral,
    secondaryDark: brandingColors.coral,
    
    background: brandingColors.dark_navy,
    backgroundSecondary: brandingColors.dark_navy,
    surface: brandingColors.dark_navy,
    surfaceHighlight: brandingColors.light_2_dark_navy,
    
    textPrimary: brandingColors.white,
    textSecondary: brandingColors.dark_1_coral,
    textDisabled: brandingColors.light_2_grey,
    textInverse: brandingColors.dark_navy,
    
    border: brandingColors.accent_grey,
    borderLight: brandingColors.light_2_dark_navy,
    borderFocus: brandingColors.light_2_green,
  },
  spacing: lightTheme.spacing,
  typography: lightTheme.typography,
  borders: lightTheme.borders,
};

export const defaultTheme = Object.freeze(lightTheme);

export default { lightTheme, darkTheme, defaultTheme };