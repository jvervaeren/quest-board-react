import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./root.route"

export const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: () => <div>Signup</div>,
})
