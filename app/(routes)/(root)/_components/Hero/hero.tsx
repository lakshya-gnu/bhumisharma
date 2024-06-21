"use client";

import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

import { desktopVariants, mobileVariants } from "./animation";
import { Content } from "./content";
import { useEffect } from "react";
import { useIsDesktop } from "@/lib/hooks/use-is-desktop";

export const Hero = () => {
    const media = useMediaQuery("(min-width: 1024px)");
    const { setIsDesktop } = useIsDesktop();

    useEffect(() => {
        setIsDesktop(media);
    }, [media, setIsDesktop]);

    if (!media) {
        return (
            <motion.div
                variants={mobileVariants}
                initial="initial"
                animate="normal"
                className="fixed left-0 top-0 z-10 h-screen bg-gradient-to-r from-indigo-900 to-blue-900"
            >
                <Content />
            </motion.div>
        );
    }

    return (
        <motion.div
            variants={desktopVariants}
            initial="initial"
            animate="normal"
            className="fixed left-0 top-0 z-50 h-screen bg-gradient-to-r from-indigo-900 to-blue-900"
        >
            <Content />
        </motion.div>
    );
};
