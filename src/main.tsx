import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { startMockServer } from "./app/server"
import App from './app/App.tsx'

startMockServer()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
