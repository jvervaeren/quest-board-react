import { useMutation } from "@tanstack/react-query"
import { serverConnection } from "../connections/server.connection"

type Credentials = {
  email: string,
  password: string
}

const loginUser = async (creds: Credentials): Promise<void> => {
  const response = await serverConnection.post(
    '/login',
    creds,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  if (response.status !== 201) throw new Error("Login failed")

  console.log(response.data)
}

export function useLogin() {
  const login = useMutation({
    mutationFn: loginUser
  })

  return login.mutateAsync
}
