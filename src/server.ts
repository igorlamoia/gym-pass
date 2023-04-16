import { app } from "./app";
import { env } from "./env";

app.get("/hellow", (request, reply) => {
  return reply.send({ hello: "world" });
});

app
  .listen({
    port: env.PORT,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("Server started 🚀");
  });
