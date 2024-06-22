"use server";

import { db } from "../database/drizzle";
import { messages } from "../database/schema";
import { MessageFormType } from "../zod/message-form-schema";

export async function addMessage({
    name,
    email,
    profession,
    message,
    source,
}: MessageFormType) {
    try {
        const response = await db.insert(messages).values({
            name,
            email,
            profession,
            message,
            source,
        });

        return true;
    } catch (error) {
        console.log(error);

        return false;
    }
}
