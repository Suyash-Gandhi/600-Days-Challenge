import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RadioExample from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RadioExample />
  </StrictMode>,
)
