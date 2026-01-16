import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "../root.route"

export const viewQuestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quests/$questId',
  component: () => <div>View Quest</div>,
})
