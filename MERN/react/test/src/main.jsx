import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ScrollExample from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollExample />
  </StrictMode>,
)
