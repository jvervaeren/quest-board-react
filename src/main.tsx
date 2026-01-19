import "@radix-ui/themes/styles.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { startMockServer } from "./app/server"
import { RouterProvider } from "@tanstack/react-router"
import { router } from './app/routes/index.ts'
import './index.css'
import { Theme } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

startMockServer()

const appRoot = createRoot(document.getElementById('root')!)
const queryClient = new QueryClient()

appRoot.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme appearance="dark" accentColor="violet">
        <RouterProvider router={router} />
      </Theme>
    </QueryClientProvider>
  </StrictMode>,
)
