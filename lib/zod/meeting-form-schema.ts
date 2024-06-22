import { z } from "zod";

export const meetingformSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    profession: z.string(),
    date: z.date({ message: "Please select a date" }),
    message: z.string(),
    source: z.string(),
});

export type MeetingFormType = z.infer<typeof meetingformSchema>;
