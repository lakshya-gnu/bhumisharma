import { z } from "zod";

export const messageFormSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    profession: z.string(),
    message: z.string(),
    source: z.string(),
});

export type MessageFormType = z.infer<typeof messageFormSchema>;
