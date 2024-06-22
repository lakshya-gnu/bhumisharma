import { relations } from "drizzle-orm";
import { date, pgTable, text } from "drizzle-orm/pg-core";

export const meetings = pgTable("meetings", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    email: text("email").notNull(),
    profession: text("profession").notNull(),
    date: text("date").notNull(),
    message: text("message").notNull(),
    source: text("source").notNull(),
});

export const messages = pgTable("messages", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name").notNull(),
    email: text("email").notNull(),
    profession: text("profession").notNull(),
    message: text("message").notNull(),
    source: text("source").notNull(),
});
