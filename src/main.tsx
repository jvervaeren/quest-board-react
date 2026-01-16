import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { startMockServer } from "./app/server"
import { RouterProvider } from "@tanstack/react-router"
import { router } from './app/routes/index.ts'

startMockServer()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
