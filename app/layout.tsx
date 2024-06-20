import type { Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";

import { ThemeProvider } from "@/lib/providers/theme";
import { env } from "@/lib/env";
import { cn } from "@/lib/utils";
import * as fonts from "@/lib/fonts";

import "./globals.css";

const APP_NAME = env.APP_NAME;
const APP_DESCRIPTION = env.APP_DESCRIPTION;

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
        <ClerkProvider>
            <html lang="en">
                <body
                    className={cn(
                        fonts.inter.variable,
                        fonts.manrope.variable,
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
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
