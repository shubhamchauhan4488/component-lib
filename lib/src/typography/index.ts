export interface TypographyTokens {
  // Font families with fallbacks
  fontFamilySans: string;
  fontFamilySansDemibold: string;
  fontFamilySansBold: string;
  fontFamilySansLight: string;
  fontFamilySerif: string;
  
  // Font sizes expressed in pixels
  fontSizeBase: number;
  fontSizeSmall: number;
  fontSizeLarge: number;
  
  // Line-height is unitless for flexibility
  lineHeightBase: number;
  lineHeightSmall: number;
  
  // Letter-spacing in em units (or use zero for standard tracking)
  letterSpacing: number;
  
  // Font weights as numbers (400 = normal, 500 = demibold, 700 = bold)
  fontWeightRegular: number;
  fontWeightDemibold: number;
  fontWeightBold: number;
}

export const typography: TypographyTokens = {
  // Use system fonts with fallbacks for a robust typography system.
  fontFamilySans: '"Roboto", Arial, sans-serif',
  fontFamilySansDemibold: '"Roboto Medium", Arial, sans-serif',
  fontFamilySansBold: '"Roboto Bold", Arial, sans-serif',
  fontFamilySansLight: '"Roboto Light", Arial, sans-serif',
  fontFamilySerif: '"Roboto Slab", Georgia, serif',
  // Base font sizes (in pixels)
  fontSizeBase: 16,
  fontSizeSmall: 14,
  fontSizeLarge: 20,
  
  // Unitless line-heights (calculated as a multiplier of font-size)
  lineHeightBase: 1.5,
  lineHeightSmall: 1.4,
  
  // Letter spacing (0 implies no extra spacing, adjust in em if needed)
  letterSpacing: 0,
  
  // Font weights
  fontWeightRegular: 400,
  fontWeightDemibold: 500,
  fontWeightBold: 700,
};

export default typography;