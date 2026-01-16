import { createServer } from "miragejs"

export function startMockServer () {
  return createServer({
    routes() {
      this.namespace = "api"

      this.get("/ping", () => {
        return { status: "ok" };
      })

      this.post("/login", (_, _request) => {
        return 1
      })

      this.post("/signup", (_, _request) => {
        return 1
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