import {
  Card,
  Flex,
  Heading,
  Separator,
  TextField,
  Button,
  Text,
  Link,
  Box
} from "@radix-ui/themes"
import { signupRoute } from "../routes/signup.route"

export const LoginForm = () => {
  return (
    <Box width={{ xs: "300px", "sm": "400px" }}>
      <Card>
        <Flex direction={"column"} p={"2"} gap={"4"}>
          <Flex direction={"column"} align={"center"} gap={"2"}>
            <Heading as="h1">Quest Board</Heading>
          </Flex>
          <Separator size={"4"} />
          <Flex direction={"column"} gap={"4"}>
            <Flex direction={"column"} gap={"1"}>
              <label htmlFor="email">Email:</label>
              <TextField.Root
                id="email"
                size={"3"}
                placeholder="name@example.com"
              />
            </Flex>
            <Flex direction={"column"} gap={"1"}>
              <label htmlFor="password">Password:</label>
              <TextField.Root
                id="password"
                type="password"
                size={"3"}
                placeholder="password"
              />
            </Flex>
          </Flex>
          <Separator size={"4"} />
          <Flex direction={"column"} align={"center"} gap={"2"}>
            <Button style={{ width: "100%" }}>Login</Button>
            <Text size={"1"}>or</Text>
            <Link href={signupRoute.path}>Sign up</Link>
          </Flex>
        </Flex>
      </Card>
    </Box>
  )
}
