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
import { useForm } from "@tanstack/react-form"
import { signupRoute } from "../routes/signup.route"
import { useLogin } from "../hooks/useLogin.hook"

export const LoginForm = () => {
  const login = useLogin()

  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    onSubmit: async ({ value: formValues }) => {
      await login(formValues)
    }
  })

  return (
    <Box width={{ xs: "300px", "sm": "400px" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <Card>
          <Flex direction={"column"} p={"2"} gap={"4"}>
            <Flex direction={"column"} align={"center"} gap={"2"}>
              <Heading as="h1">Quest Board</Heading>
            </Flex>
            <Separator size={"4"} />
            <Flex direction={"column"} gap={"4"}>
              <Flex direction={"column"} gap={"1"}>
                <form.Field
                  name="email"
                  children={(field) => (
                    <>
                      <label htmlFor="email">Email:</label>
                      <TextField.Root
                        id="email"
                        name="email"
                        size={"3"}
                        placeholder="name@example.com"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </>
                  )}
                />
              </Flex>
              <Flex direction={"column"} gap={"1"}>
                <form.Field
                  name="password"
                  children={(field) => (
                    <>
                      <label htmlFor="password">Password:</label>
                      <TextField.Root
                        id="password"
                        name="password"
                        type="password"
                        size={"3"}
                        placeholder="password"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </>
                  )}
                >
                </form.Field>
              </Flex>
            </Flex>
            <Separator size={"4"} />
            <Flex direction={"column"} align={"center"} gap={"2"}>
              <Button type="submit" style={{ width: "100%" }}>Login</Button>
              <Text size={"1"}>or</Text>
              <Link href={signupRoute.path}>Sign up</Link>
            </Flex>
          </Flex>
        </Card>
      </form>
    </Box>
  )
}
