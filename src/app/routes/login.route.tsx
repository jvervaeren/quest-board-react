import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./root.route"

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => <div>Login</div>,
})
