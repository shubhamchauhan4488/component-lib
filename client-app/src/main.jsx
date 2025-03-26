import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { AppThemeProvider } from './AppContext';
import { lightTheme } from '@shubham_chauhan/component-lib';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppThemeProvider initialTheme="light">
      <App />
    </AppThemeProvider>
  </StrictMode>
);