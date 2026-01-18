import "@radix-ui/themes/styles.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { startMockServer } from "./app/server"
import { RouterProvider } from "@tanstack/react-router"
import { router } from './app/routes/index.ts'
import { Theme } from '@radix-ui/themes'

startMockServer()

const appRoot = createRoot(document.getElementById('root')!)

appRoot.render(
  <StrictMode>
    <Theme appearance="dark" accentColor="violet">
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>,
)
