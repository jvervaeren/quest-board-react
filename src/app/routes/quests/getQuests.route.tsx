import { createRoute } from "@tanstack/react-router"
import { Flex, Text, Button } from "@radix-ui/themes"
import { rootRoute } from "../root.route"

export const getQuestsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quests',
  component: () => (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
  ),
})
