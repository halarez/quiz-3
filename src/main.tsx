import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App' // Removed the curly braces here

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
