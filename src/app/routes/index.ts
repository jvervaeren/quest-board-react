import { createRouter } from "@tanstack/react-router"
import { rootRoute } from "./root.route"
import { loginRoute } from "./login.route"
import { signupRoute } from "./signup.route"
import { getQuestsRoute } from "./quests/getQuests.route"
import { viewQuestRoute } from "./quests/viewQuest.route"
import { indexRoute } from "./index.route"

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  signupRoute,
  getQuestsRoute,
  viewQuestRoute
])

export const router = createRouter({
  routeTree,
  defaultPreload: false,
  scrollRestoration: false,
})
