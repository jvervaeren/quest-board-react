import { createServer } from "miragejs"

export function startMockServer() {
  return createServer({
    routes() {
      this.namespace = "api"

      this.get("/ping", () => {
        return { status: "ok" };
      })

      this.post("/login", (_, request) => {
        const attrs = JSON.parse(request.requestBody)
        return attrs
      })

      this.post("/signup", (_, request) => {
        const attrs = JSON.parse(request.requestBody)
        return attrs
      })

      this.get("/quests", () => {
        return []
      })

      this.post("/quests", () => {
        return {}
      })

      this.get("/quests/:id", (_, _request) => {
        return {}
      })

      this.patch("/quests/:id", (_, _request) => {
        return 1
      })
    },
  })
}