import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root.route"

export const getQuestsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quests',
  component: () => <div>Quests</div>,
})
