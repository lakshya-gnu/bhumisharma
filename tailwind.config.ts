import type { Config } from "tailwindcss";
import { mulish, noto_sans, nunito } from "./lib/fonts";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                inter: ["var(--font-inter)"],
                open_sans: ["var(--font-open_sans)"],
                montserrat: ["var(--font-montserrat)"],
                poppins: ["var(--font-poppins)"],
                raleway: ["var(--font-raleway)"],
                rubik: ["var(--font-rubik)"],
                nunito: ["var(--font-nunito)"],
                noto_sans: ["var(--font-noto-sans)"],
                mulish: ["var(--font-mulish)"],
            },
            colors: {
                "plastic-pink": "#FF1493",
                "neon-pink": "#FF44CC",
                "neon-yellow": "#FFF01F",
                "chartreuse-yellow": "#DFFF00",
                "electric-lime": "#CCFF00",
                "ufo-green": "#7FFF00",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            transitionProperty: {
                menu: "transform",
            },
            transitionTimingFunction: {
                menu: "cubic-bezier(0.76, 0, 0.24, 1)",
            },
            transitionDuration: {
                menu: "0.75s",
            },
            transformOrigin: {
                "bottom-center": "bottom center",
            },

            height: {
                "slide-height": "var(--slide-height)",
            },
            flex: {
                "embla-slide": "0 0 var(--slide-size)",
                "embla-parallax-image":
                    "0 0 calc(115% + (var(--slide-spacing) * 2))",
            },
            margin: {
                "embla-container": "0 0 0 calc(var(--slide-spacing) * -1)",
            },
            padding: {
                "embla-slide": "var(--slide-spacing)",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require("tailwindcss-3d")({ legacy: true }),
    ],
} satisfies Config;

export default config;
