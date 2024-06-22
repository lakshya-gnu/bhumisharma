"use server";

import { db } from "../database/drizzle";
import { meetings } from "../database/schema";
import { MeetingFormType } from "../zod/meeting-form-schema";

export async function addMeeting({
    name,
    email,
    profession,
    date,
    message,
    source,
}: MeetingFormType) {
    console.log(
        "Function got values: ",
        name,
        email,
        profession,
        String(date),
        message,
        source,
    );

    try {
        const response = await db.insert(meetings).values({
            name,
            email,
            profession,
            date: String(date),
            message,
            source,
        });

        return true;
    } catch (error) {
        console.log(error);

        return false;
    }
}
