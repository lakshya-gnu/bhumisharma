import type { Metadata } from "next";

import { env } from "@/lib/env";
import { cn } from "@/lib/utils";
import * as fonts from "@/lib/fonts";

import { Toaster } from "sonner";

import "./globals.css";

const APP_NAME = "Bhumi Sharma";
const APP_DESCRIPTION = "Bhumi Sharma's Portfolio";

export const metadata: Metadata = {
    title: {
        default: APP_NAME,
        template: `%s | ${APP_NAME}`,
    },
    description: APP_DESCRIPTION,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    fonts.inter.variable,
                    fonts.montserrat.variable,
                    fonts.mulish.variable,
                    fonts.noto_sans.variable,
                    fonts.nunito.variable,
                    fonts.open_sans.variable,
                    fonts.poppins.variable,
                    fonts.raleway.variable,
                    fonts.rubik.variable,
                )}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
