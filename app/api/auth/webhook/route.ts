import { headers } from "next/headers";

import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";

import { env } from "@/lib/env";

export async function POST(req: Request) {
    const WEBHOOK_SECRET = env.WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error(
            "Please add the Clerk Webhook Secret from Clerk Dashboard to your environment variables.",
        );
    }

    // Get Headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response("Error occured -- no svix headers", {
            status: 400,
        });
    }

    // Get the body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    console.log("webhook body: ", body);

    const ensureBase64Padding = (base64: string) => {
        while (base64.length % 4 !== 0) {
            base64 += "=";
        }
        return base64;
    };

    // Create a new SVIX instance with your secret.
    const wh = new Webhook(ensureBase64Padding(WEBHOOK_SECRET));

    let evt: WebhookEvent;

    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent;
    } catch (err) {
        console.error("Error verifying webhook:", err);
        return new Response("Error occured", {
            status: 400,
        });
    }

    // Get the ID and type
    const { id } = evt.data;
    const eventType = evt.type;

    switch (eventType) {
        // TODO: Add all your event types & functions here

        case "user.created":
            console.log("User created with ID: ", id);
            break;

        case "user.updated":
            console.log("User updated with ID: ", id);
            break;

        case "user.deleted":
            console.log("User deleted with ID: ", id);
            break;

        case "session.created":
            console.log("Session created with ID: ", id);
            break;

        case "session.removed":
            console.log("Session removed with ID: ", id);
            break;

        case "session.ended":
            console.log("Session ended with ID: ", id);
            break;

        case "sms.created":
            console.log("SMS created with ID: ", id);
            break;
    }
}
