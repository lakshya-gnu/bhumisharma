import { env } from "@/lib/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./lib/database/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: env.DATABASE_URL!,
    },
    out: "./drizzle",
    verbose: true,
    strict: true,
});
