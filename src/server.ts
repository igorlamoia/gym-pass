import { app, prisma } from "./app";
import { env } from "./env";

app.get("/", async (request, reply) => {
  await prisma.user.create({
    data: {
      name: "Igor Lamoia",
      email: "igorlamoia@hotmail.com",
      password_hash: "123456",
    },
  });
  return reply.send({ message: "Dados inseridos com sucesso!" });
});

app
  .listen({
    port: env.PORT,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("Server started 🚀");
  });
