import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider } from './AppContext'
import { lightTheme } from './../../lib/src/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider initialTheme={lightTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
