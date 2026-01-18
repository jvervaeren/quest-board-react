import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./root.route"
import { LoginPage } from "../pages/login.page"

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => <LoginPage />,
})
