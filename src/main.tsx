import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@fontsource/playfair-display/index.css";
import "@fontsource/playfair-display/400-italic.css";
//import "@fontsource/playfair-display/1200-italic.css";




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
