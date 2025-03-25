import type { Preview, Decorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { lightTheme, darkTheme } from '../src/theme'

const withTheme: Decorator = (StoryFn, context) => {
  // active theme value from the story parameter
  const { theme } = context.globals;
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;
  
  return (
    <ThemeProvider theme={storyTheme}>
      <StoryFn />
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withTheme], // Add the decorator to the preview
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    }
  },
  // Add toolbar for theme switching
  globals: {
    theme: 'light',
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light Theme' },
          { value: 'dark', icon: 'moon', title: 'Dark Theme' }
        ],
        showName: true,
      },
    },
  },
};

export default preview;