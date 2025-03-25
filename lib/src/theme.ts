import { brandingColors } from './colors/colors';
import typography from './typography';

export interface AppTheme {
  header: {
    primaryBg: string;
    primaryText: string;
    secondaryBg: string;
    secondaryText: string;
    border: string;
  };
  body: {
    primaryBg: string;
    primaryText: string;
    secondaryBg: string;
    secondaryText: string;
  };
  accordionBackground: string;
  accordionColor: string;
  typography: typeof typography;
}

export const lightTheme: AppTheme = {
  header: {
    primaryBg: brandingColors.light_grey, 
    primaryText: brandingColors.light_1_dark_navy,
    secondaryBg: brandingColors.light_grey,
    secondaryText: brandingColors.dark_2_green,
    border: brandingColors.accent_grey,
  },
  body: {
    primaryBg: brandingColors.white,
    primaryText: brandingColors.light_1_dark_navy, 
    secondaryBg: brandingColors.white,
    secondaryText: brandingColors.light_1_dark_navy,
  },
  accordionBackground: brandingColors.white,
  accordionColor: brandingColors.light_1_dark_navy,
  typography,
};

export const darkTheme: AppTheme = {
  header: {
    primaryBg: brandingColors.dark_navy,          
    primaryText: brandingColors.white,            
    secondaryBg: brandingColors.dark_1_light_grey,    
    secondaryText: brandingColors.dark_navy,     
    border: brandingColors.accent_grey,       
  },
  body: {
    primaryBg: brandingColors.dark_1_light_grey,            
    primaryText: brandingColors.dark_navy, 
    secondaryBg: brandingColors.light_2_dark_navy,    
    secondaryText: brandingColors.white, 
  },
  accordionBackground: brandingColors.dark_1_light_grey,    
  accordionColor: brandingColors.white,
  typography,
};

export const defaultTheme = Object.freeze(lightTheme);


export default { lightTheme, darkTheme, defaultTheme };