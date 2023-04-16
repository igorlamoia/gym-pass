import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.log("Invalid env variables", _env.error.format());
  throw new Error("Invalid env variables");
}

export const env = _env.data;
