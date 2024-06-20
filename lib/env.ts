import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        APP_NAME: z.string().min(1).max(10),
        APP_DESCRIPTION: z.string().min(10).max(30),
        DATABASE_URL: z.string().url(),
        CLERK_SECRET_KEY: z.string(),
        WEBHOOK_SECRET: z.string(),
    },
    client: {},
    runtimeEnv: {
        APP_NAME: process.env.APP_NAME,
        APP_DESCRIPTION: process.env.APP_DESCRIPTION,
        DATABASE_URL: process.env.DATABASE_URL,
        CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
        WEBHOOK_SECRET: process.env.WEBHOOK_SECRET,
    },
});
