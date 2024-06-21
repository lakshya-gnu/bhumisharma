"use client";

import { useEffect, useRef } from "react";

import { useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

import { Profile } from "./profile";

const sectionComponents = [Profile];

export const ScrollableContent = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start", "end end"],
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });

    return (
        <section
            ref={ref}
            className="max-w-screen absolute left-0 top-0 z-50 w-full lg:left-[50vw] lg:max-w-[50vw]"
        >
            {sectionComponents.map((Component, index) => {
                const targetScale =
                    1 - (sectionComponents.length - index) * 0.05;

                return (
                    <div
                        key={index}
                        ref={ref}
                        className="sticky top-0 mt-[100vh] flex h-screen w-full items-center justify-center lg:mt-0"
                    >
                        <motion.div className="max-w-screen relative top-0 flex h-screen w-full origin-top flex-col shadow-lg lg:max-w-[50vw]">
                            <Component />
                        </motion.div>
                    </div>
                );
            })}
        </section>
    );
};
